const express = require('express');
const panierRouter = require('./panier.route');
const router = express.Router();

router.use('/panier/', panierRouter);


module.exports = router;