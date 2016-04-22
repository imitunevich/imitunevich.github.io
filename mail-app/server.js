var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var options = {
    publicPath: config.output.publicPath,
    stats: {
        chunkModules:false,
        colors: true
    }
};

new WebpackDevServer(webpack(config), options).listen(8181);
