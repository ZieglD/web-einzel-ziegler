const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  // 1
  // Use the src/index.js file as entry point to bundle it.
  // If the src/index.js file imports other JS files,
  // bundle them as well
  entry: path.resolve(__dirname, './src/index.js'),
  // 2
  // The bundles source code files shall result in a bundle.js file
  // in the /dist folder
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  // 3
  // The /dist folder will be used to serve our application
  // to the browser
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new CleanWebpackPlugin,
    new HtmlWebpackPlugin({
      title: "Project - Home",
      template: path.resolve(__dirname, './src/index.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      title: "Project - About",
      template: path.resolve(__dirname, './src/about.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'content.html',
      title: "Project - Books",
      template: path.resolve(__dirname, './src/content.html'),
    })
  ],
  // 5 
  // Integrate Babel in the build process
  // Define which files to use the loader
  module: {
    // configuration regarding modules
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/, // files to exclude
        use: ['babel-loader']
      },
      // CSS and SASS
      {
        test: /\.(scss|css)$/,  // load files that end with scss and css
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ]
  },
  resolve: {
    // options for resolving module requests
    extensions: ['*', '.js']  // files to load
  }
};