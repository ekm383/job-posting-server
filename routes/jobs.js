const express = require("express");
const router = express.Router();

// middlewares
const { authCheck } = require("../middlewares/auth");

// controller
const {
  getUsersJobs,
  createUsersJob,
  getJobs,
  deleteJob,
  getSingleJob,
  updateJob,
} = require("../controllers/jobs");

// routes
router.post("/user/create", authCheck, createUsersJob);
router.get("/user/jobs", authCheck, getUsersJobs);
router.get("/jobs", authCheck, getJobs);
router.get("/job/:slug", getSingleJob);
router.put("/job/:slug", authCheck, updateJob);
router.delete("/job/:slug", authCheck, deleteJob);

module.exports = router;
