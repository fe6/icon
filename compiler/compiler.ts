/**
 * @format
 * @file compiler 编译函数
 */

import { JSXGenerator } from './generator/jsx-gen';
import { Parser } from './parser';

interface ICompilerOptions {
  generator: JSXGenerator;
  content: string;
  name: string;
}

export const compiler = (options: ICompilerOptions) => {
  const info = new Parser(options.content);
  const pParams = {
    name: options.name,
    ...info.process(),
  };
  return options.generator.process(pParams);
};
