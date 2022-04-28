var path=require("path");
const CleanWepackPlugin=require("clean-webpack-plugin");
const HtmlWebpackPlugin=require("html-webpack-plugin");


module.exports = {
    entry: "./src//index.js",
    output: {
        filename:"bundle.js",
        path:path.resolve(__dirname,"dist")
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    plugins:[
        new CleanWepackPlugin(["dist"]),
        new HtmlWebpackPlugin({
            title:"css study",
            template:"./src/CollapsingMargins/index.html"
        })
    ],
    devtool:"inline-source-map",
    devServer:{
        contentBase: './dist'
    },
    mode:"development"

}