const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', (req, res) => {
    try {
        let data = {};
        const options = {
            uri: 'http://starlord.hackerearth.com/books',
            method: 'GET',
            headers: {
                'user-agent': 'node.js',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        };

        request(options, (err, response, body) => {
            if (err) {
                return res.status(400).json({ errors: err });
            }
            res.json(JSON.parse(body));
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;