const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const path = require('path');
const glob = require('glob');
/* // make array with pages names
let pages = ['cat1', 'cat2', 'cat3'];
// map a new HtmlWebpackPlugin to each of those names outputing array
let htmlPlugins = pages.map( page=>{
  return new HtmlWebpackPlugin({
    filename: page + '.html',
    template: './src/index.html'
  });
});
 */

const PATHS = {
  src: path.join(__dirname, 'src')
}

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
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i, //i - case insensitive, $ lõpp, kontrollib kas on css lõpuga faili
        use: ["style-loader","css-loader"], // kui on siis kasutab seda loaderit
      },
      {
        test: /\.s[ac]ss$/i, //i - case insensitive, $ lõpp, kontrollib kas on scss lõpuga faili
        use: [MiniCssExtractPlugin.loader,"css-loader","sass-loader"], // kui on siis kasutab neid loadereid, järjekord on tähtis
      },
      {
        test: /\.twig$/i, 
        use: "twig-loader", 
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Home page',
      template: './src/index.twig',
      templateParameters: {
        title: 'hello'
      }
    }),
    new HtmlWebpackPlugin({
      title: 'About us',
      filename: 'about.html',
      template: './src/about.twig'
    }),
    // ...htmlPlugins, //spread syntax, operation spreading array into existing array
    new MiniCssExtractPlugin(),
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
    }),
  ],
};