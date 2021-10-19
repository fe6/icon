/**
 * @format
 * @file compiler 编译函数
 */

import { BaseTransformer, ITransformPlugin } from './transformer/base';
import { JSXGenerator } from './generator/jsx-gen';
import { ImgGenerator } from './generator/img-gen';
import { Parser } from './parser';

interface ICompilerOptions {
  generator: JSXGenerator | ImgGenerator;
  content: string;
  name: string;
  plugins: ITransformPlugin[];
}

export const compiler = (options: ICompilerOptions) => {
  const parser = new Parser(options.content);
  const info = parser.process();
  const transformer = new BaseTransformer({
    info,
    plugins: options.plugins,
  });
  const transformed = transformer.process();
  return options.generator.process({
    name: options.name,
    ...transformed,
  });
};
