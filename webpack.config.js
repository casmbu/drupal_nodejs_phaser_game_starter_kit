const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    server: './src/server/server.ts',
    client: './src/client/client.ts',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/example_game_module/js'),
  },
  target: 'web',
};
