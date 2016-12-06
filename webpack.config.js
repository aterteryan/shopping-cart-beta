var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: './app.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	context: __dirname,
	devtool: 'source-map',
	devServer: {
		inline: true,
		port: 3000
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=10000'
			}
		]
	}
};