// https://github.com/storybookjs/storybook/tree/next/addons/storysource
module.exports = function({ config }) {
  config.mode = 'development';
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [
      {
        loader: require.resolve("@storybook/addon-storysource/loader"),
        options: {
          prettierConfig: {
            printWidth: 50,
            tabWidth: 2,
            bracketSpacing: true,
            trailingComma: "es5",
            singleQuote: true
          }
        }
      }
    ],
    enforce: "pre"
  });

  return config;
};
