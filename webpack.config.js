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
  },
  // devServer: {
  //   historyApiFallback: true,
  //   contentBase: './',
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Credentials": "true",
  //     "Access-Control-Allow-Methods": "GET",
  //     "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
  //   }
  // }
};
