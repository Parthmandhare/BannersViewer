const { Router } = require("express");
const db = require("../DB/index");

const router = Router();

router.put("/:ID", (req, res) => { // Changed to :ID
    const bannerId = req.params.ID;
    const { Title, Description, Timer, Link, isVisible } = req.body;

    // Fetch the current banner data
    const selectSql = 'SELECT * FROM banners WHERE ID = ?';
    db.query(selectSql, [bannerId], (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            const currentBanner = results[0];

            // Update only the fields that are provided in the request
            const updatedBanner = {
                Title: Title || currentBanner.Title,
                Description: Description || currentBanner.Description,
                Timer: Timer || currentBanner.Timer,
                Link: Link || currentBanner.Link,
                isVisible: isVisible || currentBanner.isVisible
            };

            const updateSql = 'UPDATE banners SET Title = ?, Description = ?, Timer = ?, Link = ?, isVisible = ? WHERE ID = ?';
            db.query(updateSql, [updatedBanner.Title, updatedBanner.Description, updatedBanner.Timer, updatedBanner.Link, updatedBanner.isVisible, bannerId], (err, result) => {
                if (err) throw err;
                res.send('Banner updated successfully');
            });
        } else {
            res.status(404).send('Banner not found');
        }
    });
});

module.exports = router;
