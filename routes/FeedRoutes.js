const express = require('express');
const router = express.Router();

const FeedModel = require('../models/FeedModel');

router.post(
    '/', // http://localhost:3001/feeds/
    (req, res) => {
        const formData = {
            description: req.body.description,
            rating: req.body.rating
        };

        const newFeed = new FeedModel(formData);

        newFeed
        .save()
        .then(
            (document) => {
                res.send(document)
            }
        )
        .catch(
            (e) => {
                console.log('e', e)
                res.send(e)
            }
        )
    }
)

module.exports = router;