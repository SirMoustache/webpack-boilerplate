const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const IS_DEV = process.env.NODE_ENV === 'dev';

const DIR_SRC = 'src';
const DIR_DEST = process.env.dest || 'build';

module.exports = {
  entry: ['babel-polyfill', path.resolve(__dirname, DIR_SRC, 'js/index.js')],
  output: {
    library: 'WPB',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, DIR_DEST),
  },
  resolve: {
    modules: [DIR_SRC, 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: IS_DEV,
            },
          },
        ],
      },
      // CSS / LESS
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: IS_DEV,
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: IS_DEV,
              paths: [path.resolve(__dirname, 'node_modules', DIR_SRC)],
            },
          },
        ],
      },
      // CSS / SCSS
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: IS_DEV,
            },
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: IS_DEV,
              includePaths: [path.resolve(__dirname, 'node_modules', DIR_SRC)],
            },
          },
        ],
      },
      // IMAGES
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
      // FONTS
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, DIR_SRC, 'index.html'),
    }),
  ],
};
