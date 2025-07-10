const mongoose = require('mongoose');
const connect = async () => {
  try {
    await mongoose.connect('mongodb+srv://shubham:Ayachi%401711@cluster0.bp9s31i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log('Database connected successfully')
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
  }
};

module.exports = connect;
