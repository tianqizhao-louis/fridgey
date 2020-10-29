"use strict";

const router = require("express").Router(),
    demoController = require("../controllers/demoController");

router.get("/", demoController.index);
router.post("/", demoController.savetodatabase);

module.exports = router;