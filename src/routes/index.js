const express = require('express');
const panierRouter = require('./panier.route');
const shopRouter = require('./shop.route');
const router = express.Router();

router.use('/panier/', panierRouter);
router.use('/shop/', shopRouter);


module.exports = router;