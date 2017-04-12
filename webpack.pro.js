const path = require('path');
const webpack = require('webpack');
const cleanPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: ["./app/src/index"],
		vendor: ['react']
	},
	output: {
		path: path.join(__dirname, "app/dist"),
		filename: "[name].js",
		publicPath: "http://localhost:8080/app/dist",
		chunkFilename: "[name].js"
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', '.less', '.scss', '.css'],
		modules: ['node_modules', './app/src']
	},
	module: {
		loaders: [{
			test: /\.js[x]?$/,
			include: path.join(__dirname, "app/src"),
			exclude: /node_modules/,
			loader: "babel-loader"
		},  {
			test:/\.css$/,
			loader:"style-loader!css-loader?modules"
		}]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			},
			BASE_URL: JSON.stringify('http://localhost:8001'),
		}),
		// webpack 2 不再支持
		// new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new cleanPlugin([path.join(__dirname, "app/dist")]),
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor'],
			filename: 'vendor.js'
		})
	]
}