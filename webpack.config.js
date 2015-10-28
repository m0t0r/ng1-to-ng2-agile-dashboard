module.exports = {
  entry: ['./app/app.js'],
  output: {
    filename: 'build/bundle.js'
  },
  eslint: {
    configFile: './.eslintrc'
  },
  module: {
    /*preLoaders: [
      {
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ],*/
    loaders: [
      { test: /\.scss/, exclude: /node_modules/, loader: "style-loader!css-loader!sass-loader" },
      { test: /\.jade$/, exclude: /node_modules/, loader: "jade-loader" },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },

  resolve: {
    extensions: ["", ".js", ".jade"]
  }
};