const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/' , (req, res) => {
    let queryText = `SELECT * FROM "feedback";`;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in GET route', error);
        res.sendStatus(500)
    })
})

module.exports = router;