module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015','react']
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ['style', 'css']
      }
    ]
  }
};
