module.exports = {
  entry: ['./app/app.js'],
  output: {
    filename: 'build/bundle.js'
  },
  devtools: 'source-map',
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel",  query: { presets: ['es2015']}},
      { test: /\.scss/, exclude: /node_modules/, loader: "style-loader!css-loader!sass-loader" },
      { test: /\.jade$/, exclude: /node_modules/, loader: "jade-loader" }
    ]
  },

  resolve: {
    extensions: ["", ".js", ".jade"]
  }
};