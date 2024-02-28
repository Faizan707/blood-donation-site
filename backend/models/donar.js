const mongoose = require('mongoose');

// Define Donor schema
const donorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  bloodGroup: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
    lowercase: true, // Convert email to lowercase
    trim: true // Remove extra spaces from email
  },
  address: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
    lowercase: true, // Convert email to lowercase
    trim: true // Remove extra spaces from email
  }
});

// Create Donor model from the schema
const Donor = mongoose.model('Donor', donorSchema);

module.exports = Donor;
