const express = require('express');
const { even , fibo , random , prime } = require('../routes/app');

const router = express.Router();

router.post('/e', even);
router.post('/f', fibo);
router.post('/r', random);
router.get('/p', prime);

module.exports = router;