const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
 // mode: 'development',  
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
  plugins: [new HtmlWebpackPlugin()],
};