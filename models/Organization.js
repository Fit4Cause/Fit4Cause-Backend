const mongoose = require('mongoose');

const { Schema } = mongoose;
const {NGoSchema} = require('./NGO')
// Define a sub-schema for donatedTo
const DonationSchema = new Schema({
    NGO: {
        type:NGoSchema,
    },
    amount: {
        type: Number,
        required: true
    }
});

const OrganizationSchema = new Schema({
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
    donationAmount: {
        type: Number
    },
    donatedTo: [NGO] // Nesting DonationSchema inside donatedTo array
});

module.exports = mongoose.model('Organization', OrganizationSchema);
