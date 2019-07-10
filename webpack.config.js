const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        'vendor': ['react', 'react-dom'],
        'app': path.resolve(__dirname, 'src', 'App.tsx')
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    name: 'vendor',
                    enforce: true
                },
            },
        },
    },
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].chunk.js',
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
            'main': path.resolve(__dirname, 'src', 'main'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
        ],
    },
    // plugins
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
    ],
    mode: 'development',
    devServer: {
        contentBase: __dirname + "/src/",
        port: 9000
    }
};