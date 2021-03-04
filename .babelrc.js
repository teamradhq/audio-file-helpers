/* eslint-disable array-element-newline */
console.log('Config');

module.exports = (api) => {
  api.cache(true);

  const presets = [
    ['@babel/preset-env', {
      corejs: 3,
      targets: {
        node: '10.15.1',
        browsers: [
          'chrome >= 52',
          'fireFox >= 44',
          'safari >= 7',
          'edge >= 12',
        ],
      },
      useBuiltIns: 'usage',
    }],
  ];

  const plugins = [
    [require.resolve('babel-plugin-module-resolver'), {
      root: ['./dist/src'],
      alias: {
        '@lib': './dist/src/lib',
        '#': './tests',
      },
    }],
  ];

  return {
    presets,
    plugins,
  };
};
