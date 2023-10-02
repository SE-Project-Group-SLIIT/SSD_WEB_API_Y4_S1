const rateLimit = require("express-rate-limit");

// Define a rate limiter with desired options
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Max 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});

module.exports = {
  limiter, // Export the limiter so it can be used in other files
};
