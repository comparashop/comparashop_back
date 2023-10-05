const Panier = require("../models/panier.model");


exports.post = (req, res) => {
    const panier = new Panier({
        title: req.body.title,
        image: req.body.image,
        aliments : req.body.aliments,
        commerces: req.body.commerces,
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
    .populate({
        path:"commerces",
        populate:{
            path:"panier",
            model:"Panier"
        }
    })
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

exports.getId = (req, res) => {
    Panier.findById(req.params.id)
    .populate({
        path:"commerces",
        populate:{
            path:"shop",
            model:"Shop"
        }
    })
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
        title: req.body.title,
        image: req.body.image,
        aliments : req.body.aliments,
        commerces: req.body.commerces
    })
    .then((data) => {
        Panier.findById(req.params.id)
        .populate({
            path:"commerces",
            populate:{
                path:"panier",
                model:"Panier"
            }
        })
        .then((data)=>{
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
    })
    
    
 
}