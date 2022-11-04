const WebpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");
const config = require("./webpack.config.js");
const path = require('path');

const compiler = webpack(config);
const devServerOptions = { ...config.devServer, open: true };
// create instance
const server = new WebpackDevServer(devServerOptions, compiler);

// start
server.listen(3000, "localhost", err => {
    console.log("server started")
})