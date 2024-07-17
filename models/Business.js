const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
    businessName: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Business = mongoose.model('Business', businessSchema);
module.exports = Business;
