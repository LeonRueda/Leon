const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(path.resolve(__dirname, 'dist'));

module.exports = {
  entry: {
    app: './src/scripts/index.tsx',
    style: './src/style/all.scss'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /\.jpg$/, loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          emit: true
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" }, // creates style nodes from JS strings
          { loader: "css-loader" },// translates CSS into CommonJS
          { loader: "sass-loader"} // compiles Sass to CSS
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Leon Rueda - Front End Engineer',
      template: './src/templates/index.ejs'
    })
  ],
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      Style: path.resolve(__dirname, 'src/style/'),
      Images: path.resolve(__dirname, 'src/images/'),
      Templates: path.resolve(__dirname, 'src/templates/')
    }
  }
};
