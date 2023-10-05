const express = require('express');
const router = express.Router();
const panierController = require('../controllers/panier.controller')

router.post('/', panierController.post);
router.get('/', panierController.getAll);
router.put('/:id', panierController.update);
router.get('/:id', panierController.getId);


module.exports = router;