"use strict";

const theDemo = require("../models/demoask");

module.exports = {
    index: (req, res, next) => {
        res.render("index");
    },

    savetodatabase : (req, res, next) => {
        var newDemo = new theDemo();
        newDemo.useremail = req.body.useremail;

        newDemo.save((err, doc) => {
            if (!err){
                res.redirect('/');
            }else{
                console.log('Error during record insertion: ' + err)
            }
        });
    }
};