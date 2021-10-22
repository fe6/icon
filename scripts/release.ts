/** @format */

import releaseIt from 'release-it';
import prompts from 'prompts';
import semver from 'semver';
import { resolve, join } from 'path';

import { errorLog } from '../packages/compiler/src';

import { VERSION_INCREMENTS } from './config';

const args = require('minimist')(process.argv.slice(2));

const PLUGIN_PATH = join(__dirname, './release-plugin.ts');

export async function release() {
  let targetVersion = args._[0];

  if (!targetVersion) {
    const pkgDir = process.cwd();
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

  if (!semver.valid(targetVersion)) {
    errorLog(`无效的目标版本 -> ${targetVersion}`);
  }

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
      [PLUGIN_PATH]: {},
    },
    npm: {
      tag,
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
  await release();
})();
