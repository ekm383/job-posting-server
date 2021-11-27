const express = require("express");
const router = express.Router();

// controller
const { getJobs } = require("../controllers/jobs");

// routes
router.post("/getJobs", getJobs);

module.exports = router;
