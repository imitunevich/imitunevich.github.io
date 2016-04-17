module.exports = {
    entry: "./scripts/app",
    output: {
        path:     __dirname + '/scripts',
        filename: "mail-app.js"
    },
    watch: false, //пересборка live

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: "cheap-inline-module-source-map",

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions:         ['', '.js']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates:    ['*-loader', '*'],
        webpack:         ['', '.js']
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel?presets[]=es2015,plugins[]=transform-es2015-modules-commonjs'
        }, {
            test: /\.html$/,
            loader: 'raw'
        }]
    }
};