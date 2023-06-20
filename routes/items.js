const express = require('express');
const itemsController = require('../controller/itemsController');

const router = express.Router();

router.get('/items',itemsController.getAllItems);
router.get('/items/:id',itemsController.getSpecificitems);
router.post('/items',itemsController.createNewItems);
router.put('/items/:id',itemsController.updateItems);
router.delete('/items/:id',itemsController.deleteItems);

module.exports = router;