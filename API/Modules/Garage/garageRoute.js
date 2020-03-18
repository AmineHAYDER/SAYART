const garage = require('./garageModel');
const express = require('express');

const { getGarages, updateGarage, deleteGarage, createGarage, getGarage } = require('./garageController');

const router = express.Router();

router.route('/').get(getGarages).post(createGarage);

router.route('/:id').get(getGarage).put(updateGarage).delete(deleteGarage);


module.exports = router;