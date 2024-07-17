const mongoose = require('mongoose');

const pricingPlanSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['monthly', 'yearly'],
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        enum: ['basic', 'pro', 'enterprise'],
        required: true
    },
    currency: {
        type: String,
        required: true
    }
}, { timestamps: true });

const PricingPlan = mongoose.model('PricingPlan', pricingPlanSchema);
module.exports = PricingPlan;
