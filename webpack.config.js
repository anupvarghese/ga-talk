var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './app.js' // Your appʼs entry point
  ],
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.png$/, loader: "url-loader?mimetype=image/png" },
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader?camelCase&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader"
      },
      { test: /\.js$/, exclude: /node_modules/, loaders: ["react-hot", "babel-loader"] }
    ]
  },
  postcss: function () {
    return [require('autoprefixer'), require('precss')];
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
