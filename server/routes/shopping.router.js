const { response } = require('express');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET LIST FROM SERVER
router.get('/', (req, res) => {
    console.log('in router GET');

//ORDER ITEMS ALPHABETICALLY
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


// POST NEW ITEM TO LIST
router.post('/', (req, res) => {

    const item = req.body;

// INSERT NEW ITEM TO TABLE WITH GIVIN VALUES
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

// PUT EACH ITEM TO UPDATE STATUS
router.put('/:id', (req, res) => {

    const itemId = req.params.id;

    console.log('in PUT shopping put with id of:', itemId);

// UPDATE STATUS TO TOGGLE BOOLEAN
    let sqlText = `
    UPDATE "shopping_list"
    SET "status" = NOT "status"
    WHERE "id" = $1;`;

    pool.query(sqlText, [itemId])
        .then((dbRes) => {

            res.sendStatus(200);
        })
        .catch(err => {
            console.log('in /shopping put error', err);
            
            res.sendStatus(500);
        });
});

// PUT ALL ENDPOINT
router.put('/', (req, res) => {

// SET ALL STATUS TO FALSE
    let sqlText = `
    UPDATE "shopping_list"
    SET "status" = FALSE;
    `;

    pool.query(sqlText)
        .then((dbRes) => {

            res.sendStatus(200);
        })
        .catch(err => {
            console.log('in /shopping put2 error', err);

            res.sendStatus(500);
        });
});

// DELETE BY ID
router.delete('/:id', (req, res) => {

    const itemId = req.params.id;

    console.log('ITEM ID', itemId);

// DELETE FROM TABLE BY GIVIN ID
    const sqlText = `DELETE FROM "shopping_list"
                        WHERE  "id" = $1;`;

    const sqlParams = [itemId];

    pool.query(sqlText, sqlParams)
        .then((response) => {
        
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log('error in DELETE', err);

            res.sendStatus(500);
        });
});

// DELETE BY ENDPOINT
// router.delete('/', (req,res) => {

//     const sqlText = `TRUNCATE TABLE "shopping_list";`;

//     pool.query(sqlText)
//         .then((response) => {
    
//             res.sendStatus(200);
//         })
//         .catch((err) => {
//             console.log('error in DELETE', err);

//             res.sendStatus(500);
//         })
// })

module.exports = router;