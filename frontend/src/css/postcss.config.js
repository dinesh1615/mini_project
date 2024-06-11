module.exports = {
    plugins: [
      require('autoprefixer'),
      require('postcss-replace')({
        pattern: /color-adjust/g,
        data: {
          replaceAll: true,
          replace: 'print-color-adjust',
        },
      }),
    ],
  };
  