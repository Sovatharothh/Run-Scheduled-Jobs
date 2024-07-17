const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try { 
        mongoose.set("strictQuery", false);
        mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
        console.log('MongoDB connected with Mongoose');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
