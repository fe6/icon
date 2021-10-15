/**
 * @format
 * @file Parser 解析器
 */

import type { CssNode } from 'css-tree';
import { xml2js, Element } from 'xml-js';
import csstree, {
  Atrule,
  AtrulePrelude,
  Declaration,
  Raw,
  Rule,
} from 'css-tree';

import {
  ISvgElementInfo,
  ISvgStyleKeyframesInfo,
  ISvgStyleRuleInfo,
  SvgShapeAttr,
  SvgStyleSelectorType,
  SvgStyleType,
  ISvgInlineStyleAttr,
  ISvgAttr,
  SvgTags,
} from './types';
import { tokenize } from './tokenize';

export class Parser {
  private element: ISvgElementInfo = {
    type: 'svg',
    attrs: [],
    style: [],
    children: [],
    parent: null,
  };

  private content = '';
  private keyframs: ISvgStyleKeyframesInfo[] = [];
  private styleRules: ISvgStyleRuleInfo[] = [];

  constructor(svgContent: string) {
    this.content = svgContent;
  }

  // 处理一个元素
  process() {
    const json = xml2js(this.content, {
      compact: false,
      ignoreDeclaration: true,
      ignoreInstruction: true,
      ignoreComment: true,
      ignoreCdata: true,
      ignoreDoctype: true,
      ignoreText: false,
    });
    this.element = this.processElement(
      json.elements[0],
      null,
    ) as ISvgElementInfo;
    return this.getResult();
  }

  // 处理提取属性
  private processElement(
    elem: Element,
    parent: ISvgElementInfo | null,
  ): ISvgElementInfo | null {
    const type = elem.name || '';

    if (type === 'style') {
      this.processStyle(elem);
      return null;
    }

    if (elem.type !== 'element') {
      return null;
    }

    const info: ISvgElementInfo = {
      parent,
      type: type as SvgTags,
      attrs: [],
      style: [],
      children: [],
    };

    const processAttr = this.processAttr(elem, info);
    const [attrs, styleAttrs] = processAttr;
    info.attrs = attrs;
    info.style = styleAttrs;
    info.children = this.processChildren(elem, info);
    return info;
  }

  private processInlineStyleAttr(
    rule: Declaration,
    owner: ISvgElementInfo,
  ): ISvgInlineStyleAttr {
    const value: Raw = rule.value as Raw;
    const property = rule.property;
    return {
      name: property,
      type: SvgShapeAttr.CONST,
      expression: value.value,
      owner,
    };
  }

  private processInlineStyle(
    text: string | number,
    owner: ISvgElementInfo,
  ): ISvgInlineStyleAttr[] {
    const json = csstree.parse(String(text), {
      context: 'declarationList',
      parseValue: false,
    });
    return (json as AtrulePrelude).children.toArray().map((item: CssNode) => {
      return this.processInlineStyleAttr(item as Declaration, owner);
    });
  }

  private processAttr(
    elem: Element,
    owner: ISvgElementInfo,
  ): [ISvgAttr[], ISvgInlineStyleAttr[]] {
    const attrs: ISvgAttr[] = [];
    let styleAttrs: ISvgInlineStyleAttr[] = [];
    const map = elem.attributes || {};

    Object.keys(map).forEach((key) => {
      const value = map[key];

      if (value != null) {
        if (key === 'style') {
          styleAttrs = [...this.processInlineStyle(value, owner)];
          return;
        }

        attrs.push({
          name: key,
          type: SvgShapeAttr.CONST,
          expression: `${value}`,
          owner,
        });
      }
    });
    return [attrs, styleAttrs];
  }

  private processStyle(elem: Element) {
    const children = elem.elements || [];
    children.forEach((child: Element) => {
      if (child.type === 'text') {
        const json = csstree.parse(String(child.text), {
          parseAtrulePrelude: false,
          parseRulePrelude: false,
          parseValue: false,
        });

        this.processStyleRule((json as any).children.toArray());
      }
    });
  }

  private processStyleRule(rules: CssNode[]) {
    rules.forEach((rule: CssNode) => {
      if (rule.type === 'Atrule' && rule.name === 'keyframes') {
        this.keyframs.push(this.processKeyframesRule(rule));
      } else if (rule.type === SvgStyleType.Rule) {
        this.styleRules.push(this.processRule(rule));
      }
    });
  }

  private processKeyframesRule(rule: Atrule): ISvgStyleKeyframesInfo {
    const block = rule.block;
    const prelude: Raw = rule.prelude as Raw;
    const res: ISvgStyleKeyframesInfo = {
      styleType: SvgStyleType.Keyframes,
      type: SvgShapeAttr.CONST,
      name: 'keyframes',
      selector: {
        selectorType: SvgStyleSelectorType.IDENTIFIER,
        type: SvgShapeAttr.CONST,
        expression: prelude.value,
        children: [],
      },
      rules: [],
    };

    if (!block) {
      return res;
    }

    block.children.toArray().forEach((item: CssNode) => {
      res.rules.push(this.processRule(item as Rule, true));
    });
    return res;
  }

  private processRule(rule: Rule, isKeyframe?: boolean): ISvgStyleRuleInfo {
    const prelude: Raw = rule.prelude as Raw;
    const block = rule.block;
    const value = prelude.value;
    const res: ISvgStyleRuleInfo = {
      styleType: SvgStyleType.Rule,
      type: SvgShapeAttr.CONST,
      selector: isKeyframe
        ? [
            [
              {
                selectorType: SvgStyleSelectorType.IDENTIFIER,
                type: SvgShapeAttr.CONST,
                expression: value,
                children: [],
              },
            ],
          ]
        : tokenize(value),
      attrs: [],
    };

    if (!block) {
      return res;
    }

    block.children.toArray().forEach((item: CssNode) => {
      res.attrs.push(this.processStyleAttr(item as Declaration, res));
    });
    return res;
  }

  private processChildren(
    elem: Element,
    parent: ISvgElementInfo | null,
  ): ISvgElementInfo[] {
    const children: ISvgElementInfo[] = [];

    if (elem.elements == null) {
      return children;
    }

    elem.elements.forEach((element: Element) => {
      const elem = this.processElement(element, parent);

      if (elem) {
        children.push(elem);
      }
    });
    return children;
  }

  private processStyleAttr(rule: Declaration, owner: ISvgStyleRuleInfo) {
    const value: Raw = rule.value as Raw;
    const name = rule.property;
    return {
      name,
      type: SvgShapeAttr.CONST,
      expression: value.value,
      owner,
    };
  }

  private getResult() {
    return {
      element: this.element,
      style: {
        keyframes: this.keyframs,
        rules: this.styleRules,
      },
    };
  }
}
