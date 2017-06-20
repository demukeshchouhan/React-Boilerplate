var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry : "./app/app.jsx",
	output : {
		path : path.resolve(__dirname, "public"),
		filename : "bundle.js"
	},
	devtool: 'source-map',
	devServer: {
	 historyApiFallback: true,
 	},
	module:{
		rules:[
			{
				test: /\.jsx$/,
				use: "babel-loader"
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ["css-loader", "sass-loader"]
				})
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template : "./app/index.html"
		}),
		new ExtractTextPlugin("style.css")
	],
	resolve: {
		extensions: [".js", ".jsx", ".scss"]
	}
}
