const { response } = require('express');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET

router.get('/', (req, res) => {
    console.log('in router GET');
    //Ordering items alphabetically
    const sqlText = `SELECT * FROM "shopping_list" ORDER BY item ASC;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query`, error);
            res.sendStatus(500); 
        })
})


// POST

module.exports = router;