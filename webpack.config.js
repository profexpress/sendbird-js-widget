var path = require('path');

module.exports = {
  entry: {
    widget: ['babel-polyfill', './src/js/widget.js']
  },
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: '[name].SendBird.js',
    publicPath: "dist"
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      { // SCSS
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      { // ES6
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  }
};
