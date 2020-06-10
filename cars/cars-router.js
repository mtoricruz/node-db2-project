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
});

// R =============================

router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
        res.json(cars);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to retrieve cars' });
    })
});

// U =============================

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    db('cars')
        .where({ id })
        .update(changes)
        .then(count => {
            if(count > 0) {
                res.status(200).json({ message: "car info updated!" })
            } else {
                res.status(404).json({ message: "no records found" })
            }
        })
        .catch(err => {
            console.log("PUT / error", err)
            res.status(500).json({ message: err.message })
        })
})

// D =============================

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    db('cars')
        .where({ id })
        .del()
        .then(count => {
            if (count > 0) {
                res.status(200).json({ message: "Car deleted" })
            } else {
                res.status(404).json({ message: "Car not found"})
            }
        })
        .catch(err => {
            console.log("DELETE / error", err)
            res.status(500).json({ message: err.message })
        })
})

module.exports = router;