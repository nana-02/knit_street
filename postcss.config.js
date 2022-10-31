const path = require('path');
const resolver = require('postcss-import-alias-resolver');

module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    [
      'postcss-import',
      {
        resolve: resolver({
          alias: {
            stories: path.resolve(__dirname, 'stories')
          },
          dontPrefix: true
        })
      }
    ],
    'postcss-mixins',
    'postcss-calc',
    'postcss-simple-vars',
    'postcss-nested',
    'autoprefixer',
    'postcss-icss-keyframes',
    'postcss-custom-media',
    'cssnano',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009'
        },
        stage: 3,
        features: {
          'custom-properties': false
        }
      }
    ]
  ]
};
