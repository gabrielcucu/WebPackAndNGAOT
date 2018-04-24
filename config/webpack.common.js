var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [new TsconfigPathsPlugin({
      configFile:  'src/tsconfig.json' ,

      baseUrl:'../'
    })]
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader',
        'angular2-template-loader']
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: 'file-loader?name=/assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
      // {
      //   test: /\.css$/,
      //   exclude: helpers.root('src', 'app'),
      //   use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?sourceMap' })
      // },
      // {
      //   test: /\.css$/,
      //   include: helpers.root('src', 'app'),
      //   use: 'raw-loader'
      // }
    ]
  },

  plugins: [
    // Workaround for angular/angular#11580
    // new webpack.ContextReplacementPlugin(
    //   // The (\\|\/) piece accounts for path separators in *nix and Windows
    //   /angular(\\|\/)core(\\|\/)@angular/,
    //   helpers.root('./src'), // location of your src
    //   {} // a map of your routes
    // ),
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows

      // For Angular 5, see also https://github.com/angular/angular/issues/20357#issuecomment-343683491
      /\@angular(\\|\/)core(\\|\/)esm5/,
      helpers.root('src'), // location of your src
      {
        // your Angular Async Route paths relative to this root directory
      }
    ),
    new CheckerPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      'Popper': 'popper.js'
    })
  ]
};
