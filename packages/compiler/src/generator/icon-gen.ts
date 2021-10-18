/** @format */

import { Generator, IGeneratorOptions } from './base';
import {
  SvgShapeAttr,
  SvgStyleSelectorType,
  ISvgStyleInfo,
  ISvgStyleRuleInfo,
  ISvgStyleSelector,
  ISvgStyleAttr,
  ISvgStyleKeyframesInfo,
} from '../types';

const defOpts = {
  author: '',
  name: '',
  prefix: 'icon',
  style: false,
  stylePropName: 'props',
  wrapperNeedName: false,
  cssPrefix: '',
};

export class IconGenerator extends Generator {
  prefix = '';
  cssPrefix = '';
  result = '';

  constructor(options: IGeneratorOptions = defOpts) {
    super(options);

    this.$opts = Object.assign(defOpts, options);
    this.prefix = options.prefix as string;
  }

  getResult() {
    return this.result;
  }

  processStyle(style: ISvgStyleInfo) {
    const old = this.indentSize;
    this.indentSize = 0;
    this.writeLine('`');
    style.keyframes.forEach((rule: ISvgStyleKeyframesInfo) =>
      this.processStyleKeyframe(rule),
    );
    style.rules.forEach((rule: ISvgStyleRuleInfo) =>
      this.processStyleRule(rule),
    );
    this.write('`');
    this.indentSize = old;
  }

  processStyleKeyframe(rule: ISvgStyleKeyframesInfo) {
    const name = rule.name;
    const selector = rule.selector;
    const rules = rule.rules;
    this.writeLine(
      `@${name} ${
        selector.type === SvgShapeAttr.CONST
          ? selector.expression
          : `\${${selector.expression}\}`
      } {`,
    );
    this.indent(1);
    rules.forEach((item: ISvgStyleRuleInfo) => this.processStyleRule(item));
    this.indent(-1);
    this.writeLine('}');
  }

  processStyleRule(rule: ISvgStyleRuleInfo) {
    const selector = rule.selector;
    const attrs = rule.attrs;
    this.writeLine(`${this.calcStyleSelectorGroup(selector)} {`);
    this.indent(1);
    attrs.forEach((attr: ISvgStyleAttr) => this.processStyleAttr(attr));
    this.indent(-1);
    this.writeLine('}');
  }

  calcStyleSelectorGroup(selector: ISvgStyleSelector[][]) {
    return selector
      .map((item: ISvgStyleSelector[]) => this.calcStyleSelectorList(item))
      .join(', ');
  }

  calcStyleSelectorList(selector: ISvgStyleSelector[]) {
    return selector
      .map((item: ISvgStyleSelector) => this.calcStyleSelector(item))
      .join('');
  }

  calcStyleSelector(selector: ISvgStyleSelector) {
    const selectorType = selector.selectorType;
    const expression = selector.expression;
    const type = selector.type; // TODO

    if (selectorType === SvgStyleSelectorType.NOT) {
      return selectorType;
    }

    if (type === SvgShapeAttr.CONST) {
      return expression;
    }

    return `\$\{${expression}}`;
  }

  processStyleAttr(attr: ISvgStyleAttr) {
    const type = attr.type;
    const expression = attr.expression;
    const name = attr.name;

    if (type === SvgShapeAttr.CONST) {
      this.writeLine(`${name}: ${expression};`);
      return;
    }

    this.writeLine(`${name}: \$\{${expression}};`);
  }
}
