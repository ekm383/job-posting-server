const express = require("express");
const router = express.Router();

// controller
const { getJobs } = require("../controllers/jobs");

// routes
router.get("/getJobs", getJobs);

module.exports = router;
