const Jobs = require("../models/jobs");

exports.getJobs = async (req, res) => {
  Jobs.findOne().exec((err, jobs) => {
    if (err) throw new Error(err);
    res.json(jobs);
  });
};
