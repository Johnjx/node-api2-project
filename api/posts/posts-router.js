// implement your posts router here

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello from posts Router!')
})

module.exports = router;