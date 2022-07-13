const express = require('express'); // import express
const router = express.Router(); // can register routes here

const stuffCtrl = require('../controllers/stuff'); //stuff control constant

// routes
router.get('/', stuffCtrl.getAllStuff); // finding the data from 'Thing' - GET route
router.post('/', stuffCtrl.createThing); // sending to the server - POST route - CREATE
router.get('/:id', stuffCtrl.getOneThing); // retrieving from the server - GET route - RECEIVE
router.put(':id', stuffCtrl.modifyThing); // modify existing data - PUT route - UPDATE
router.delete(':id', stuffCtrl.deleteThing); // delete existing data - DELETE

module.exports = router;