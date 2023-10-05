const Panier = require("../models/panier.model");


exports.post = (req, res) => {
    const panier = new Panier({
        name : req.body.name,
        title: req.body.title,
        image: req.body.image,
        aliments : req.body.aliments
    });
    panier.save()
        .then((data) => {
            res.status(200).send({
                panier : data,
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
    Panier.find()
        .then((data) => {
            res.send({
                panier: data
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
    const panier = Panier.findByIdAndUpdate(req.params.id, {
        name : req.body.name,
        title: req.body.title,
        image: req.body.image,
        aliments : req.body.aliments
    })
            .then((data) => {
                res.send({
                    panier : data,
                    update : true
                })
            })
            .catch((err) => {
                res.status(500).send({
                    message : err.message || "Some error occured"
                })
            })
 
}