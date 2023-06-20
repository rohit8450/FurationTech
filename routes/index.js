const express = require('express');


const router = express.Router();


router.get('/', (req, res) => {

    return res.json({ "Welcome": ` to my Backend Software for the Items ` });

});
router.use("/api", require('./items'));

module.exports = router;