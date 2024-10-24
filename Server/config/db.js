const mongoose = require('mongoose');

const ConnectToDB = () => {
    mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
}

module.exports = ConnectToDB;