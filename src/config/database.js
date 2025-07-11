const mongoose = require('mongoose');
const {MONGODB_URI} = require('./configFile.js')
const connect = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Database connected successfully')
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
  }
};

module.exports = connect;
