const { Router } = require("express");
const db = require("../DB/index");

const router = Router();

router.get("/" , (req, res) => {

    const sql = 'SELECT * FROM banners WHERE ID = 100';

    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });

})



module.exports = router;