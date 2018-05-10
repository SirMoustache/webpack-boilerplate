const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const IS_DEV = process.env.NODE_ENV === 'dev';

const dirSrc ='src';
const dirDest = process.env.dest || 'build';

const version = process.env.version ? `-${process.env.version}` : ``;
const name = process.env.name || `bundle`;
const bundleName = `${name}${version}`;

module.exports = {
  entry: ['babel-polyfill', path.resolve(__dirname, dirSrc, 'js/index.js')],
  output: {
    library: 'WPB',
    filename: `${bundleName}.js`,
    path: path.resolve(__dirname, dirDest)
  },
  resolve: {
    modules: [dirSrc, 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: IS_DEV
            }
          }
        ]
      },
      // CSS / SASS
      {
        test: /\.less/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: IS_DEV
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: IS_DEV,
              paths: [path.resolve(__dirname, 'node_modules', dirSrc)]
            }
          }
        ]
      },
      // IMAGES
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, dirSrc, 'index.html')
    })
  ]
};
