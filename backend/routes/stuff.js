const express = require('express'); // import express
const router = express.Router(); // can register routes here

const auth = require('../middleware/auth'); // authentication middleware

const stuffCtrl = require('../controllers/stuff'); //stuff control constant

// routes
router.get('/', auth, stuffCtrl.getAllStuff); // finding the data from 'Thing' - GET route
router.post('/', auth, stuffCtrl.createThing); // sending to the server - POST route - CREATE
router.get('/:id', auth, stuffCtrl.getOneThing); // retrieving from the server - GET route - RECEIVE
router.put('/:id', auth, stuffCtrl.modifyThing); // modify existing data - PUT route - UPDATE
router.delete('/:id', auth, stuffCtrl.deleteThing); // delete existing data - DELETE

module.exports = router;