var path = require('path');

module.exports = {
  context: __dirname,
  mode: 'none',
  entry: './sketch.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  devtool: 'source-map'
};


//
// module.exports = {
//   entry: './foo.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'foo.bundle.js'
//   }
// };