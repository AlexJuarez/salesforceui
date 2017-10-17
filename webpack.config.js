const HtmlWebpackPlugin = require('html-webpack-plugin');
const LessPluginCleanCSS = require('less-plugin-clean-css');
const path = require('path');

function createEntries() {
  if (process.env.NODE_ENV === 'production') {
    return ['./src/index.jsx'];
  }
  return [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './src/index.jsx',
  ];
}

module.exports = {
  entry: createEntries(),
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: [path.join(__dirname, 'src')],
      use: [{
        loader: 'babel-loader',
      }],
    },
    {
      test: /\.css$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
      }],
    },
    {
      test: /\.less$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
      }, {
        loader: 'less-loader',
        options: {
          plugins: [new LessPluginCleanCSS({ advanced: true })],
        },
      }],
    },
    {
      test: /\.json$/,
      use: [{
        loader: 'json-loader',
      }],
    }],
  },
  output: {
    devtoolModuleFilenameTemplate: '/[resource-path]',
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: 'index.bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'SalesForce 1.0',
      template: path.join(__dirname, '/index.ejs'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
