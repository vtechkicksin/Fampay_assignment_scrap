const dotenv = require("dotenv").config()
const express = require('express')
const videoModel = require('../models/videoModel')
const router = new express.Router();




router.get('/getAllData', function(req, res) {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    videoModel.find({})
    .sort({"publishedAt":-1})
    .skip(skip)
    .limit(limit)
    .exec(function(err, data) {
    if (err) {
        res.status(500).send(err);
    } else {
        res.status(200).json(data);
    }
    });
    
});


router.get('/details', function(req, res) {
    console.log("sandhu",req.body)
    const titleArr = req.query.title ? req.query.title.replace(' ', '|') : ''
    const descArr = req.query.description ? req.query?.description.replace(' ', '|') : ''
    const arr = titleArr + '|' + descArr
    videoModel.find({ $or: [{ title: { "$regex": arr} }, {description: { $regex: arr} }] }, function(err, data) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(data);
        }
    });
});  

module.exports = router;