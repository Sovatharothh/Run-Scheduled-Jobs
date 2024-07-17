const cron = require('node-cron');
const Subscription = require('../models/Subscription');
const User = require('../models/User');

const checkExpiringSubscriptions = async () => {
    console.log("Cron job is running")
    try {
        const now = new Date();

        // Find all subscriptions that have expired
        const expiredSubscriptions = await Subscription.find({
            endDate: { $lt: now }
        }).populate('userId');

        for (const subscription of expiredSubscriptions) {
            const user = subscription.userId;
            if (user.isActive) {
                user.isActive = false;
                await user.save();
                console.log(`User ${user.email} has been deactivated due to expired subscription.`);
            }
        }
    } catch (error) {
        console.error('Error running cron job:', error);
    }
};


module.exports = checkExpiringSubscriptions;