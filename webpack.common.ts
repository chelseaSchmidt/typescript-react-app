import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  entry: path.resolve(__dirname, 'client', 'src', 'index'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client', 'public'),
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'client', 'src'),
      components: path.resolve(__dirname, 'client', 'src', 'components'),
      styles: path.resolve(__dirname, 'client', 'src', 'styles'),
      hooks: path.resolve(__dirname, 'client', 'src', 'hooks'),
      assets: path.resolve(__dirname, 'client', 'src', 'assets'),
    },
    extensions: ['.js', '.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/i,
        exclude: /(node_modules)/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][hash][ext][query]',
        },
      },
    ],
  },
};

export default config;
