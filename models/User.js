const mongoose = require('mongoose');
const { Schema } = mongoose;

const couponType = {
  id: "String",
  companyName: "String",
  weblink: "String",
  offer:"string",
  coupanCode:"string",
  image:"string"

}

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password:{
    type: String,
    required:true

  },
  orgKey: {
    type: String,
    required: true
  },
  stepsCount: {
    type: Number
  },
  coins: {
    type: Number
  },
  coupons: {
    type: [couponType]
  },
 
});




const User =  mongoose.model('User', UserSchema);

module.exports = {User};


