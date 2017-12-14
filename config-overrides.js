const { injectBabelPlugin } = require('react-app-rewired');

const babelPluginConfig = [
  'react-css-modules',
  {
    generateScopedName: '[path]___[name]__[local]___[hash:base64:5]',
    webpackHotModuleReloading: false,
    filetypes: {
      '.scss': {
        syntax: 'postcss-scss',
        plugins: ['postcss-nested'],
      },
    },
  },
];

// eslint-disable-next-line
module.exports = function override(config, env) {
  config = injectBabelPlugin(babelPluginConfig, config);
  return config;
};
