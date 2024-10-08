const { Router } = require("express");
const db = require("../DB/index");

const router = Router();

router.post("/" , (req, res) => {

    const banner = {
        ID: req.body.ID,
        Title: req.body.Title,
        Description: req.body.Description,
        Timer: req.body.Timer,
        Link : req.body.Link,
        isVisible: req.body.isVisible
    }

    console.log(banner);
    

    const sql = 'INSERT INTO banners SET ?';

    db.query(sql, banner, (err, result) => {
        if(err) throw err;
        res.send("Banner is added");
    })
})

module.exports = router;