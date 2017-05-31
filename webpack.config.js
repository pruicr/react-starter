var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

var extractPlugin = new ExtractTextPlugin({
    filename: 'css/main.css'
})

var DIST_DIR = path.resolve(__dirname, 'dist')
var SRC_DIR = path.resolve(__dirname, 'src')

var config = {
    entry: SRC_DIR + '/app/app.js',
    output: {
        path: DIST_DIR,
        filename: 'js/bundle.js',
        // publicPath: '/dist'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015', 'stage-2']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    },
    plugins: [
        extractPlugin,
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: false
        }),
        new CleanWebpackPlugin(['dist'])
    ]
}

module.exports = config
