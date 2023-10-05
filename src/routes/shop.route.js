const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop.controller')

router.post('/', shopController.post);
router.get('/', shopController.getAll);
router.put('/:id', shopController.update);

module.exports = router;