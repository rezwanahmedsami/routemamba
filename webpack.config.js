const path = require('path');
const libraryName = 'routemamba'
const outputFile = `${libraryName}.min.js` 
module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src/routemamba.js'),
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: outputFile, 
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
}