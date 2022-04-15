const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/index.ts'),
    },
    devServer: {
      static: './dist',
    },
    resolve: {
      extensions: ['.tsx', '.ts','.js'],
    },
    devtool: 'inline-source-map',
    plugins: [
      new HtmlWebpackPlugin({
          title: 'webpack Boilerplate',
          template: path.resolve(__dirname, './src/template.html'), // шаблон
          filename: 'index.html', // название выходного файла
      }),
      new CleanWebpackPlugin(),
  ],
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
         test: /\.tsx?$/,
         use: 'ts-loader',
         exclude: /node_modules/,
       },
    ],
  },
}