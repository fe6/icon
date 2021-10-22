/** @format */

import releaseIt from 'release-it';
import prompts from 'prompts';
import semver from 'semver';
import { resolve } from 'path';

import { errorLog, TGenType } from '../packages/compiler/src';

import { VERSION_INCREMENTS, COMPILER_TYPE } from './config';

const args = require('minimist')(process.argv.slice(2));

const testVersion = (tVersion: string) => {
  if (!semver.valid(tVersion)) {
    errorLog(`无效的目标版本 -> ${tVersion}`, true);
  }
};

export async function goRelease(targetPackageName: TGenType, version: string) {
  let targetVersion = version;

  if (!targetVersion) {
    const root = process.cwd();
    const pkgDir = `${root}/${targetPackageName}`;
    const pkgPath = resolve(pkgDir, 'package.json');
    const pkg = require(pkgPath);
    const currentVersion = pkg.version;
    const inc = (i: semver.ReleaseType) =>
      semver.inc(currentVersion, i, 'beta');
    const { release } = await prompts({
      type: 'select',
      name: 'release',
      message: 'Select release type',
      choices: VERSION_INCREMENTS.map(
        (i: semver.ReleaseType) => `${i}: (${inc(i)})`,
      )
        .concat(['custom'])
        .map((i) => ({ value: i, title: i })),
    });

    if (release === 'custom') {
      /**
       * @type {{ version: string }}
       */
      const res = await prompts({
        type: 'text',
        name: 'version',
        message: '输入发布版本',
        initial: currentVersion,
      });
      targetVersion = res.version;
    } else {
      targetVersion = release.match(/\((.*)\)/)[1];
    }
  }

  testVersion(targetVersion);

  const tag = `v${targetVersion}`;

  /**
   * @type {{ yes: boolean }}
   */
  const { yes } = await prompts({
    type: 'confirm',
    name: 'yes',
    message: `确定发布 ${tag}. 吗?`,
  });

  if (!yes) {
    return;
  }

  await releaseIt({
    plugins: {
      '@release-it/conventional-changelog': {
        infile: 'changelog.md',
        preset: {
          name: 'angular',
          types: [
            {
              type: 'feat',
              section: 'Features',
            },
            {
              type: 'fix',
              section: 'Bug Fixes',
            },
            {},
          ],
        },
      },
    },
    npm: {
      tag,
    },
    hooks: {
      'before:release': `ts-node ./release-hooks-before.ts`,
      'after:release': `ts-node ./release-hooks-after.ts`,
    },
    git: {
      // eslint-disable-next-line no-template-curly-in-string
      tagName: 'v${version}',
      // eslint-disable-next-line no-template-curly-in-string
      commitMessage: 'release($bump): ${version}',
    },
  });
}

(async () => {
  // pnpm release vue
  // pnpm release cube-vue 1.0.0
  const argLength = args._.length;
  if (argLength) {
    const targetVersion = args._[argLength > 1 ? 1 : 0];
    const targetPackageName = args._[0];
    if (targetVersion) {
      testVersion(targetVersion);
    }
    if (COMPILER_TYPE.includes(targetPackageName)) {
      await goRelease(targetPackageName, targetVersion);
    }
  } else {
    errorLog('请加上发布的包名~', true);
  }
})();
