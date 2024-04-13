const mongoose = require('mongoose');

const { Schema } = mongoose;
const { User } = require('./User'); // Assuming userSchema is exported from User.js

// Define a sub-schema for donatedTo

const amountSchema = new Schema({
    id: String,
    amount: Number,
    type: {
        type: String,
        enum: ['user', 'Organization']
    }
});

const NgoSchema = new Schema({
    Name: {
        type: String,
        required: true,
        unique: true
    },
    publicKey: {
        type: String
    },
    About: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    category: {
        type: String,
        required: true
    },
    raisedAmount: {
        type: [amountSchema]
    },
    collection: {
        type: Number
    }
});


const Ngo =  mongoose.model('Ngo', NgoSchema);

module.exports = {Ngo};
