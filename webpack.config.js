module.exports = {
  entry: __dirname + './client/index.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  output: {
    filename: './public/bundle.js',
    path: __dirname,
  },
};
