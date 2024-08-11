const { Router } = require("express");
const db = require("../DB/index");

const router = Router();

router.put("/:id" , (req, res) => {

    const { Title, Description, Timer, Link, isVisible } = req.body;
    const sql = 'UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?';

    db.query(sql, [Title, Description, Timer, Link, isVisible, req.params.id], (err, result) => {
        if (err) throw err;
        res.send('User updated successfully');
    });

})


module.exports = router;