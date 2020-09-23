const mongoose = require('mongoose');

const FeedSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            default: 0
        },
        date: {
            type: Date,
            default: Date.now
        }
    }
);

const FeedModel = mongoose.model('feeds', FeedSchema);

module.exports = FeedModel;