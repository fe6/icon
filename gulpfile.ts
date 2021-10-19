/**
 * @format
 * @file gulpfile 编译文件
 */

import path from 'path';
import gulp from 'gulp';
import babel from 'gulp-babel';
import ts from 'gulp-typescript';
import merge from 'merge2';
import less from 'gulp-less';
import minifyCss from 'gulp-clean-css';
import del from 'del';

type TBuildType = 'vue' | 'img' | 'compiler';
const cleanFolderType: TBuildType[] = ['vue', 'img'];
const buildType: TBuildType[] = [...cleanFolderType, 'compiler'];

const TS_CONFIG_DEF = {
  strict: true, // 启用 --noImplicitAny, --noImplicitThis, --alwaysStrict， --strictNullChecks和 --strictFunctionTypes和--strictPropertyInitialization
  preserveConstEnums: true,
  noUnusedLocals: true,
  noUnusedParameters: true,
  allowSyntheticDefaultImports: true,
  esModuleInterop: true,
  removeComments: true,
  declaration: true, // 生成 .d.ts 文件
};

const babelTs = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'],
        },
      },
    ],
  ],
  plugins: [
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: false,
      },
    ],
    '@vue/babel-plugin-jsx',
  ],
};

const babelCmd = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'],
        },
      },
    ],
  ],
  plugins: [
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: false,
      },
    ],
  ],
};

const TS_CONFIG_MAP = {};
const BABEL_CONFIG_MAP = {};

buildType.forEach((buildKey: string) => {
  const gulpConfig: ts.Settings = {
    ...TS_CONFIG_DEF,
  };
  let babelConfig = {};
  if (buildKey === 'compiler') {
    gulpConfig.target = 'ES5';
    babelConfig = {
      ...babelCmd,
    };
  } else {
    gulpConfig.jsx = 'preserve';
    babelConfig = {
      ...babelTs,
    };
  }
  TS_CONFIG_MAP[buildKey] = gulpConfig;
  BABEL_CONFIG_MAP[buildKey] = babelConfig;
});

function resolve(...arg: string[]): string {
  return path.resolve(process.cwd(), ...arg);
}

function createBuildTask(name: TBuildType): string {
  const cwd = resolve('packages/', name);

  gulp.task(`build-script-${name}`, () => {
    const result = gulp
      .src(['src/*.ts', 'src/*.tsx', 'src/**/*.ts', 'src/**/*.tsx'], {
        cwd,
      })
      .pipe(ts(TS_CONFIG_MAP[name]));

    return merge([
      result.js
        .pipe(babel(BABEL_CONFIG_MAP[name] as any))
        .pipe(gulp.dest(`${cwd}/es`))
        .pipe(
          babel({
            plugins: ['@babel/plugin-transform-modules-commonjs'],
          }),
        )
        .pipe(gulp.dest(`${cwd}/lib`)),
      result.dts.pipe(gulp.dest(`${cwd}/es`)).pipe(gulp.dest(`${cwd}/lib`)),
    ]);
  });

  const tasks = [`build-script-${name}`];

  if (name !== 'compiler') {
    gulp.task(`build-css-${name}`, () => {
      return gulp
        .src('src/runtime/index.less', { cwd })
        .pipe(less())
        .pipe(minifyCss())
        .pipe(gulp.dest(`${cwd}/styles`));
    });

    gulp.task(`build-less-${name}`, () => {
      return gulp
        .src('src/runtime/index.less', { cwd })
        .pipe(gulp.dest(`${cwd}/styles`));
    });

    tasks.push(`build-css-${name}`, `build-less-${name}`);
  }

  gulp.task(`build-${name}`, gulp.parallel(tasks));

  return `build-${name}`;
}

export const cleanCode = (done: () => void) => {
  cleanFolderType.forEach((iconItem: TBuildType) => {
    const cwd = resolve('packages/', iconItem);
    del([`${cwd}/**`, `!${cwd}/package.json`, `!${cwd}/README.md`]);
  });
  done();
};

export const cleanDist = (done: () => void) => {
  buildType.forEach((iconItem: TBuildType) => {
    const cwd = resolve('packages/', iconItem);
    del([`${cwd}/es`, `${cwd}/styles`, `${cwd}/lib`]);
  });
  done();
};

gulp.task(
  'default',
  gulp.series([
    cleanDist,
    ...cleanFolderType.map((iconItem: TBuildType) => createBuildTask(iconItem)),
    createBuildTask('compiler'),
  ]),
);

gulp.task('cleanCode', gulp.series([cleanCode]));
