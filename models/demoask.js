"use strict";

const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;


var demoaskSchema = new Schema({
    useremail: {type: String, required: "This field is required."}
});

module.exports = mongoose.model('demoask', demoaskSchema, "subscriberscollection");