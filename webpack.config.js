const path = require('path');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src/routemamba.js'),
    output: {
        path: path.resolve(__dirname, '.'),
        filename: 'routemamba.min.js', 
    },
}