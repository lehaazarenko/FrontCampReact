const path = require('path');

module.exports = {
  entry: {
    main: './src/App.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css/,
        loader: 'style-loader!css-loader',
        exclude: [/node_modules/, /build/],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.css'],
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/',
    filename: 'app.js',
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
  },
};