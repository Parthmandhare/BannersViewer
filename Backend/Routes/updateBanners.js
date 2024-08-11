const { Router } = require("express");

const router = Router();

router.put("/" , (req, res) => {

    res.send("hello")

})
module.exports = router;