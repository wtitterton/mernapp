const mongoose = require('mongoose');
require('mongoose-type-url');
const Schema = mongoose.Schema;

const DisorderSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  facts:{
    type:[String],
    required:true

  },

  imgsrc:{
    type:String
  }

});

const Disorder = mongoose.model('disorder',DisorderSchema );

module.exports = Disorder;
