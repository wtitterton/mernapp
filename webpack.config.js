var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry: './public/js/main.js',

  output:{
    path:__dirname,
    filename:'./public/js/bundle.js'
  },

  module:{

    loaders:[
      {
        test: /.jsx?$/,
        loader:'babel-loader',
        exclude:/node_modules/,
        query:{
          presets:['es2015','react']
        }
      },

      { test: /\.css$/, loader: "style-loader!css-loader" },
      {test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=/public/icons/[name].[ext]"}



    ]


  },
}
