module.exports = {
    entry: './ts/index.tsx',
    mode: 'development',
    output: {
        filename: '../static/js/index.js'
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {loader: 'ts-loader'}
                ]
            }
        ]
    }
};