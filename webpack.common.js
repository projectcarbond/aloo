const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const globImporter = require('node-sass-glob-importer');

module.exports = {
  entry: {
    app: './src/client/index.jsx',
    css: './src/client/styles/index.scss'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename: "style.css",
    })
  ],
  module: {
    rules: [
      // Adds 'import .png/svg/jpg/gif' support
      {
	test: /\.(png|svg|jpg|gif)$/,
	use: [
	  'file-loader'
	]
      },
      // Adds 'import fontfile' support 
      {
	test: /\.(woff|woff2|eot|ttf|otf)$/,
	use: [
	  'file-loader'
	]
      },
      // Add ES2017 Support for JS Files
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
	  query: {
	    presets: ['@babel/preset-env']
	  }
        }
      },
      // Add React Support for JSX Files only
      {
        test: /\.jsx/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
	  query: {
	    presets: ['@babel/preset-react', '@babel/preset-env']
	  }
        }
      },
      // Add SCSS Support and Glob Addition
      {
	test: /\.scss$/,
	use: [{
	  loader: "style-loader"
	}, {
	  loader: MiniCssExtractPlugin.loader
	}, {
	  loader: "css-loader"
	}, {
	  loader: "sass-loader",
	  options: {
	    importer: globImporter()
	  }
	}]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  optimization: {
    usedExports: true
  }
};
