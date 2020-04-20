const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/js/index.js',
  plugins: [new HtmlWebpackPlugin({
    template: "./src/index.html",
    favicon: './src/img/favicon/favicon.ico'
  })],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
         test: /\.(png|svg|jpg|gif|ico)$/,
         use: {
           loader: "file-loader",
           options: {
             name: "[name].[hash].[ext]",
             outputPath: "img"
           }
         },
       },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
};