const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET

// POST

router.post('/', (req, res) => {
    const item = req.body;
    const sqlText = `INSERT INTO "shopping_list" ("item", "quantity", "unit")
                        VALUES ($1, $2, $3);`;
    pool.query(sqlText, [item.item, item.quantity, item.unit])
        .then((result) => {
            console.log(`added item to the database`, item);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`error adding item to the database`, error);
            res.sendStatus(500);
        })
})

module.exports = router;