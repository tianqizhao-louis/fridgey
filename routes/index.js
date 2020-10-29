"use strict";

const router = require("express").Router(),
  errorRoutes = require("./errorRoutes"),
  homeRoutes = require("./homeRoutes");

router.use("/", homeRoutes);
router.use("/", errorRoutes);

module.exports = router;
