const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


//GET route to get info from database
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

router.post('/', (req, res) => {
    console.log('In POST route', req.body);
    const addFeedback = req.body;
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                        VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [addFeedback.feeling, addFeedback.understanding, 
                            addFeedback.support, addFeedback.comments])
    .then((response) => {
        console.log(response);
        res.sendStatus(201);
    }).catch(error => {
        console.log('Error in POST route', error);
        res.sendStatus(500);
    });
});

module.exports = router;