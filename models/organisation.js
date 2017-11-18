const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ContactSchema = new Schema({
  street:String,
  city:String,
  postCode:String,
  contactNumber:{
    type:[String]
  },
  email:String
});

const OrganisationSchema = new Schema({
  name:{
    type:[String]
  },
  contact: ContactSchema,
  website:{
    type: mongoose.SchemaTypes.Url
  },
  about:{
    type:string
  },
  tags:{
    type:[String]
  },
  disorders:{
    type:[String]
  }

});

const Organisation = mongoose.model('organisation', OrganisationSchema);

module.exports = Organisation;
