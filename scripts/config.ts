/** @format */

import semver from 'semver';

import { TGenType } from '../packages/compiler/src';

type TGenTypeRelase = TGenType | 'compiler';

export const COMPILER_TYPE: TGenType[] = ['vue', 'img', 'cube-vue'];

export const PACKAGE_TYPE: TGenTypeRelase[] = [
  'vue',
  'img',
  'cube-vue',
  'compiler',
];

export const VERSION_INCREMENTS: semver.ReleaseType[] = [
  'patch',
  'minor',
  'major',
  'prepatch',
  'preminor',
  'premajor',
  'prerelease',
];
