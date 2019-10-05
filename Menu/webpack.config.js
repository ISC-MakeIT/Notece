module.exports = {
    entry: 'index.js',
    output: {
        filename: 'main.js'
    },
    devServer: {
        contentBase: 'dist',
        open: true
    },
    mode: 'development'
};
