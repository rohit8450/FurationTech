//This code imports the express package and the itemsController module

const express = require('express');
const itemsController = require('../controller/itemsController');

const router = express.Router();

//These lines define various routes and their corresponding HTTP methods. 
//Each route is associated with a specific function from the itemsController module,
// which handles the logic for that route.
router.get('/items',itemsController.getAllItems);
router.get('/items/:id',itemsController.getSpecificitems);
router.post('/items',itemsController.createNewItems);
router.put('/items/:id',itemsController.updateItems);
router.delete('/items/:id',itemsController.deleteItems);

//This line exports the router instance so that it can be used in other files/modules.
module.exports = router;