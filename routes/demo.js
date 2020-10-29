"use strict";

var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");

var demoask = require('../models/demoask')
var demouser = mongoose.model('demoask')

router.post('/', (req, res, next) => {
    var newUser = new demouser();
    const {theuseremail} = req.body;
    demouser.useremail = theuseremail;

    newUser.save((err, doc) => {
        if (!err){
            console.log("success");
            res.redirect('/');
        }else{
            console.log('Error during record insertion: ' + err);
        }
    })
 });

 module.exports = router;