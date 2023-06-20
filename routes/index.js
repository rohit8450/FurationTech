// importing the express package.
const express = require('express');

// creating an instance of the Express router using express.Router(). 
const router = express.Router();


router.get('/', (req, res) => {

    return res.json({ "Welcome": ` to my Backend Software for the Items ` });

});
// registers another router for the "/api" route and mounts it under that path.
//It uses the require() function to import and use the router defined in a separate file called "items.js".
router.use("/api", require('./items'));

// exports the router instance
module.exports = router;