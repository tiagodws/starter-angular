const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 3000
    },
    context: path.join(__dirname, "src"),
    entry: [
        "./index.js",
    ],
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
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
    resolve: {
        modules: [
            path.join(__dirname, "node_modules"),
        ],
    },
    plugins: [
        new ExtractTextPlugin("bundle.css"),
        new HtmlWebpackPlugin({
            template: "index.html"
        }),
    ]
};
