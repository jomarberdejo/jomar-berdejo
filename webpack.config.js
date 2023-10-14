const path = require('path');

module.exports = {
  mode: "production",
  entry: {
    animation: path.resolve(__dirname, './src/js/animation.js'),
    email: path.resolve(__dirname, './src/js/email.js'),
    observer: path.resolve(__dirname, './src/js/observer.js'),
    toggleMenu: path.resolve(__dirname, './src/js/toggleMenu.js'),
    header: path.resolve(__dirname, './src/js/header.js'),
    particles: path.resolve(__dirname, './src/js/particles.js'),
    loading: path.resolve(__dirname, './src/js/loading.js'),
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].js',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
};
