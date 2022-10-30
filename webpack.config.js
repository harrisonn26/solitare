const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.tsx",

	output: {
		path: path.join(__dirname, "dist"),
		filename: "bundle.js",
	},

	plugins: [
		new HTMLWebpackPlugin({
			template: "./src/index.html",
		}),
	],

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.ts(x)?$/,
				loader: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
	},
};
