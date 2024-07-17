const cron = require('node-cron');
const connectDB = require('./config/db');
const checkExpiringSubscriptions = require('./cronsJobs/subscriptionCheck'); 
require("./models/Business")
require("./models/PricingPlan")
require("./models/Subscription")
require("./models/User")

// Connect to MongoDB
connectDB();

// Schedule the cron job to run every minute
cron.schedule('* * * * * *', checkExpiringSubscriptions);
