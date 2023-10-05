const Shop = require("../models/shop.model");

const Panier = require("../models/panier.model");


exports.post = (req, res) => {
    const shop = new Shop({
        name: req.body.name,
        adresse: req.body.adresse,
        localization : req.body.localization
    });
    shop.save()
        .then((data) => {
            res.status(200).send({
                shop : data,
                isCreated : true 
            })
        })
        .catch((err) => {
            res.status(500).send({
                message : err.message || "Some error occured"
            })
        })
}

exports.getAll = (req, res) => {
    Shop.find()
        .then((data) => {
            res.send({
                shop: data
            })
        })
        .catch((err) => {
            res.status(500).send({
                error: 500,
                message: err.message
            })
        })
}

exports.update = (req, res) => {
    const shop = Shop.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        adresse: req.body.adresse,
        localization : req.body.localization
    })
            shop.then((data) => {
                res.send({
                    shop : data,
                    update : true
                })
            })
            .catch((err) => {
                res.status(500).send({
                    message : err.message || "Some error occured"
                })
            })
 
}