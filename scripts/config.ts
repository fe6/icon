/** @format */

import semver from 'semver';

import { TGenType } from '../packages/compiler/src';

export const COMPILER_TYPE: TGenType[] = ['vue', 'img', 'cube-vue'];

export const VERSION_INCREMENTS: semver.ReleaseType[] = [
  'patch',
  'minor',
  'major',
  'prepatch',
  'preminor',
  'premajor',
  'prerelease',
];
