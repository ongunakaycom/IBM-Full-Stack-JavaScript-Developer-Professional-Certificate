/*jshint esversion: 8 */
const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb'); // For MongoDB _id queries
const connectToDatabase = require('../models/db');
const logger = require('../logger');

// Get all gifts
router.get('/', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("gifts");
        const gifts = await collection.find({}).toArray();
        res.json(gifts);
    } catch (e) {
        logger.error('Error fetching gifts:', e);
        res.status(500).send('Error fetching gifts');
    }
});

// Get a single gift by ID
router.get('/:id', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("gifts");

        const id = req.params.id;
        const gift = await collection.findOne({ _id: new ObjectId(id) });

        if (!gift) {
            return res.status(404).send('Gift not found');
        }

        res.json(gift);
    } catch (e) {
        logger.error('Error fetching gift:', e);
        res.status(500).send('Error fetching gift');
    }
});

// Add a new gift
router.post('/', async (req, res, next) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("gifts");
        const result = await collection.insertOne(req.body);

        res.status(201).json(result.ops[0]);
    } catch (e) {
        next(e);
    }
});

// Delete a gift by ID
router.delete('/:id', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("gifts");

        const id = req.params.id;
        const result = await collection.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Gift not found' });
        }

        res.status(200).json({ message: 'Gift deleted successfully' });
    } catch (e) {
        logger.error('Error deleting gift:', e);
        res.status(500).json({ error: 'Error deleting gift' });
    }
});

module.exports = router;
