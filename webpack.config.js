const path = require('path');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: path.resolve(__dirname, 'src/index.ts'),
  devtool: 'inline-source-map',
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
    roots: [__dirname],
    alias: {
      '@CONSTANTS': path.resolve(__dirname, 'src/CONSTANTS/index.ts'),
      '@lib': path.resolve(__dirname, 'src/lib/'),
      '#types': path.resolve(__dirname, 'src/types/index/'),
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
