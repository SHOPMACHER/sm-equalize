const join = require('path').join;

module.exports = {
    entry: [
        join(__dirname, '..', 'src', 'index')
    ],
    output: {
        path: join(__dirname, '..', 'lib'),
        filename: 'equalize.js',
        library: 'equalize',
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader'
        }]
    },
    resolve: {
        extensions: ['.js']
    }
};
