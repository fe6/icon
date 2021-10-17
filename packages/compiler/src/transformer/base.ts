/** @format */

import {
  ISvgAttr,
  ISvgElementInfo,
  ISvgInfo,
  ISvgInlineStyleAttr,
  ISvgStyleAttr,
  ISvgStyleKeyframesInfo,
  ISvgStyleRuleInfo,
  ISvgStyleSelector,
  SvgTags,
} from '../types';

export interface ITransformProgramPluginItem {
  enter: (elem: ISvgInfo) => ISvgInfo;
  exit: (elem: ISvgInfo) => ISvgInfo;
}

export interface ITransformPluginItem {
  enter: (elem: ISvgElementInfo) => ISvgElementInfo | null;
  attr: (attr: ISvgAttr, elem: ISvgElementInfo) => ISvgAttr | null;
  style: (
    attr: ISvgInlineStyleAttr,
    elem: ISvgElementInfo,
  ) => ISvgInlineStyleAttr | null;
  exit: (elem: ISvgElementInfo) => ISvgElementInfo | null;
}

export interface IRuleTransformPluginItem {
  enter: (elem: ISvgStyleRuleInfo) => ISvgStyleRuleInfo | null;
  selector: (
    attr: ISvgStyleSelector,
    elem: ISvgStyleRuleInfo,
  ) => ISvgStyleSelector | null;
  attr: (attr: ISvgStyleAttr, elem: ISvgStyleRuleInfo) => ISvgStyleAttr | null;
  exit: (elem: ISvgStyleRuleInfo) => ISvgStyleRuleInfo | null;
}

export interface IKeyframesTransformPluginItem {
  enter: (elem: ISvgStyleKeyframesInfo) => ISvgStyleKeyframesInfo | null;
  selector: (
    attr: ISvgStyleSelector,
    elem: ISvgStyleKeyframesInfo,
  ) => ISvgStyleSelector | null;
  exit: (elem: ISvgStyleKeyframesInfo) => ISvgStyleKeyframesInfo | null;
}

export interface ITransformPlugin
  extends Partial<Record<SvgTags, Partial<ITransformPluginItem>>>,
    Partial<ITransformProgramPluginItem> {
  '*'?: Partial<ITransformPluginItem>;
  rule?: Partial<IRuleTransformPluginItem>;
  keyframes?: Partial<IKeyframesTransformPluginItem>;
}

export interface ITransformOptions {
  info: ISvgInfo;
  plugins: ITransformPlugin[];
}

export interface ICache {
  // program: ITransformProgramPluginItem[];
  // keyframes: IKeyframesTransformPluginItem[];
  // rules: IRuleTransformPluginItem[];
  [tag: string]:
    | ITransformPluginItem[]
    | ITransformProgramPluginItem[]
    | IKeyframesTransformPluginItem[]
    | IRuleTransformPluginItem[];
}

/**
 * @file Transformer 转化器
 */
export const noopTransformer: <T>(item: T) => T = (item) => item;
/**
 * 转换器
 *
 * @desc 默认不进行转化
 */
export class BaseTransformer {
  cache: ICache = {};
  info: ISvgInfo = {} as ISvgInfo;
  plugins: ITransformPlugin[] = [];

  constructor(options: ITransformOptions) {
    this.info = options.info;
    this.plugins = options.plugins;
  }

  process(): ISvgInfo {
    const plugins = this.processProgramPlugin();
    let info: ISvgInfo = this.info; // 正序执行进入

    for (const plugin of plugins) {
      info = plugin.enter(info);
    }

    const _info = info;
    const element = _info.element;
    const style = _info.style;
    const svg = this.processElement(element);
    const keyframes = style.keyframes.map(
      (keyframe): ISvgStyleKeyframesInfo | null => {
        return this.processStyleKeyframe(keyframe);
      },
    );
    const rules = style.rules.map(
      (rule: ISvgStyleRuleInfo): ISvgStyleRuleInfo | null => {
        return this.processStyleRule(rule);
      },
    );

    if (svg == null) {
      throw new Error('svg标签不可返回空');
    }

    info = {
      element: svg,
      style: {
        keyframes: keyframes.filter(
          (item) => !!item,
        ) as ISvgStyleKeyframesInfo[],
        rules: rules.filter((item) => !!item) as ISvgStyleRuleInfo[],
      },
    }; // 倒序执行退出

    for (let i = plugins.length - 1; i >= 0; i--) {
      info = plugins[i].exit(info);
    }

    return info;
  } // 处理一个元素

  processElement(info): ISvgElementInfo | null {
    const plugins = this.processTagPlugin(info.type); // 正序执行进入

    for (const plugin of plugins) {
      const result = plugin.enter(info);
      if (result == null) {
        return null;
      }
      info = result;
    }

    const newAttrs: IRuleTransformPluginItem[] = [];
    info.attrs.forEach((oldAttr) => {
      let attr = oldAttr;
      for (const plugin of plugins) {
        const result = plugin.attr(attr, info);

        if (result == null) {
          return;
        }
        attr = result;
      }
      newAttrs.push(attr);
    });

    info.attrs = newAttrs;

    const newStyle: ISvgInlineStyleAttr[] = [];
    info.style.forEach((oldStyle) => {
      let style = oldStyle;
      for (const plugin of plugins) {
        const result = (plugin as ITransformPluginItem).style(style, info);

        if (result == null) {
          return;
        }

        style = result;
      }

      newStyle.push(style);
    });
    info.style = newStyle; // 执行处理孩子

    const newChildren: ISvgElementInfo[] = [];
    info.children.forEach((child) => {
      // 更新一下父元素的引用
      child.parent = info; // 正序执行进入

      const result = this.processElement(child);

      if (result == null) {
        return;
      }

      newChildren.push(result);
    });
    info.children = newChildren; // 倒序执行退出

    for (let i = plugins.length - 1; i >= 0; i--) {
      const result = plugins[i].exit(info);

      if (result == null) {
        return null;
      }

      info = result;
    }

    return info;
  }

  processStyleKeyframe(oldKeyframe): ISvgStyleKeyframesInfo | null {
    let keyframe: ISvgStyleKeyframesInfo = oldKeyframe;
    const plugins = this.processStyleKeyframePlugin(); // 正序执行进入

    for (const plugin of plugins) {
      const result2 = plugin.enter(keyframe);

      if (result2 == null) {
        return null;
      }

      keyframe = result2;
    }

    for (const plugin of plugins) {
      // 删除了selector和删除没区别
      const _result3 = plugin.selector(keyframe.selector, keyframe);

      if (_result3 == null) {
        return null;
      }

      keyframe.selector = _result3;
    }

    const newRules: ISvgStyleRuleInfo[] = [];
    keyframe.rules.forEach((rule: ISvgStyleRuleInfo) => {
      const result = this.processStyleRule(rule);

      if (result == null) {
        return;
      }

      newRules.push(result);
    });
    keyframe.rules = newRules; // 倒序执行退出

    for (let i = plugins.length - 1; i >= 0; i--) {
      const result = plugins[i].exit(keyframe);

      if (result == null) {
        return null;
      }

      keyframe = result;
    }

    return keyframe;
  }

  processStyleRule(oldRule: ISvgStyleRuleInfo): ISvgStyleRuleInfo | null {
    let rule: ISvgStyleRuleInfo = oldRule;
    const plugins = this.processStyleRulePlugin(); // 正序执行进入

    for (const plugin of plugins) {
      const _result4 = plugin.enter(rule);

      if (_result4 == null) {
        return null;
      }

      rule = _result4;
    }

    const selector = this.processStyleRuleSelector(
      rule.selector,
      rule,
      plugins,
    );

    if (selector == null) {
      return null;
    }

    rule.selector = selector;
    const newAttrs: ISvgStyleAttr[] = [];
    rule.attrs.forEach((attr: ISvgStyleAttr) => {
      let res: ISvgStyleAttr = attr;

      for (const plugin of plugins) {
        res = plugin.attr(res, attr.owner) as ISvgStyleAttr;
        if (res == null) {
          return null;
        }
      }
      newAttrs.push(res);
    });
    rule.attrs = newAttrs; // 倒序执行退出

    for (let i = plugins.length - 1; i >= 0; i--) {
      const result = plugins[i].exit(rule);

      if (result == null) {
        return null;
      }

      rule = result;
    }

    return rule;
  }

  processTagPlugin(tag): ITransformPluginItem[] {
    if (this.cache[tag]) {
      return this.cache[tag] as ITransformPluginItem[];
    }

    const result: ITransformPluginItem[] = (this.cache[tag] = []); // 首先循环所有插件

    this.plugins.forEach((plugin) => {
      const tagPlugin = plugin[tag];
      const mapPlugin = plugin['*'];

      if (tagPlugin) {
        result.push({
          enter: tagPlugin.enter || noopTransformer,
          attr: tagPlugin.attr || noopTransformer,
          style: tagPlugin.style || noopTransformer,
          exit: tagPlugin.exit || noopTransformer,
        });
      }

      if (mapPlugin) {
        result.push({
          enter: mapPlugin.enter || noopTransformer,
          attr: mapPlugin.attr || noopTransformer,
          style: mapPlugin.style || noopTransformer,
          exit: mapPlugin.exit || noopTransformer,
        });
      }
    });
    return result;
  }

  processStyleKeyframePlugin(): IKeyframesTransformPluginItem[] {
    if (this.cache.keyframes) {
      return this.cache.keyframes as IKeyframesTransformPluginItem[];
    }

    const result: IKeyframesTransformPluginItem[] = (this.cache.keyframes = []);
    this.plugins.forEach((item) => {
      const plugin = item.keyframes;

      if (plugin) {
        result.push({
          enter: plugin.enter || noopTransformer,
          selector: plugin.selector || noopTransformer,
          exit: plugin.exit || noopTransformer,
        });
      }
    });

    return result;
  }

  processStyleRulePlugin(): IRuleTransformPluginItem[] {
    if (this.cache.rules) {
      return this.cache.rules as IRuleTransformPluginItem[];
    }

    const result: IRuleTransformPluginItem[] = (this.cache.rules = []);
    this.plugins.forEach((item) => {
      const plugin = item.rule;

      if (plugin) {
        result.push({
          enter: plugin.enter || noopTransformer,
          attr: plugin.attr || noopTransformer,
          selector: plugin.selector || noopTransformer,
          exit: plugin.exit || noopTransformer,
        });
      }
    });
    return result;
  }

  processProgramPlugin(): ITransformProgramPluginItem[] {
    if (this.cache.program) {
      return this.cache.program as ITransformProgramPluginItem[];
    }

    const result: ITransformProgramPluginItem[] = (this.cache.program = []);
    this.plugins.forEach((item) => {
      result.push({
        enter: item.enter || noopTransformer,
        exit: item.exit || noopTransformer,
      });
    });
    return result;
  }

  processStyleRuleSelector(
    selector,
    rule,
    plugins,
  ): ISvgStyleSelector[][] | null {
    const list: ISvgStyleSelector[][] = [];
    selector.forEach((item) => {
      const result: ISvgStyleSelector[] | null =
        this.processStyleRuleSelectorList(item, rule, plugins); // 删除了selector和删除没区别

      if (result == null) {
        return null;
      }

      list.push(result);
    });
    return list.length ? list : null;
  }

  processStyleRuleSelectorList(
    selector,
    rule,
    plugins,
  ): ISvgStyleSelector[] | null {
    const list: ISvgStyleSelector[] = [];
    selector.forEach((item) => {
      // 删除了selector和删除没区别
      const result: ISvgStyleSelector | null =
        this.processStyleRuleSelectorItem(item, rule, plugins);

      if (result == null) {
        return null;
      }

      list.push(result);
    });
    return list.length ? list : null;
  }

  processStyleRuleSelectorItem(
    oldSelector,
    rule,
    plugins,
  ): ISvgStyleSelector | null {
    let selector = oldSelector;
    // 执行属性变换
    for (const plugin of plugins) {
      // 删除了selector和删除没区别
      const result = plugin.selector(selector, rule);

      if (result == null) {
        return null;
      }

      selector = result;
    }
    return selector;
  }
}

export const transform = (info: ISvgInfo, plugins: ITransformPlugin[]) => {
  const transformer = new BaseTransformer({
    info,
    plugins,
  });
  return transformer.process();
};
