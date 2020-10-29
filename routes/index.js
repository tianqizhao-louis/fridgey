"use strict";

const router = require("express").Router(),
  errorRoutes = require("./errorRoutes"),
  homeRoutes = require("./homeRoutes"),
  demoRouter = require('./demo');

router.use("/", homeRoutes);
router.use("/freedemo", demoRouter);
router.use("/", errorRoutes);

module.exports = router;
