const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OrganisationSchema = new Schema({
  name:{
    type:string
  },
  contact:{
    type:number
  },
  email:
  {
    type:String
  }
})


const DisorderSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  facts:{
    type:[String],
    required:true

  },
  organisation:{
    fields: [{ type: [OrganisationSchema], required: true }]]
  }
});

const Disorder = mongoose.model('disorder',DisorderSchema );

module.exports = Disorder;
