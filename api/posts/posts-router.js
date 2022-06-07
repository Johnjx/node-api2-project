// implement your posts router here

const express = require('express');

const router = express.Router();

const Posts = require('./posts-model')

router.get('/', (req, res) => {
    Posts.find()
    .then(posts => {
        res.json(posts);
    })
    .catch(err => {
        res.status(500).json({
            message: "The posts information could not be retrieved",
            err: err.message,
            stack: err.stack
        })
    })
})

module.exports = router;