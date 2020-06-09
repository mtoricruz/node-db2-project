const express = require('express');

const db = require('../data/connection');

const router = express.Router();

// C =============================

router.post('/', (req, res) => {
    const carData = req.body;
    db('cars').insert(carData)
    .then(([ids]) => {
        // db('cars').where({ data: ids })
        res.status(200).json({ data: ids })
    })
    .catch(err => {
        console.log("POST / error", err)
        res.status(500).json({ message: err.message });
    })
})

// R =============================

router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
        res.json(cars);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to retrieve cars' });
    })
})

module.exports = router;