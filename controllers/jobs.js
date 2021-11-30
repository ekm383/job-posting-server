const Jobs = require("../models/jobs");
const User = require("../models/user");
const slugify = require("slugify");

exports.getJobs = async (req, res) => {
  try {
    const allJobs = await Jobs.find().exec();
    res.json(allJobs);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: error.message,
    });
  }
};

exports.getUsersJobs = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email }).exec();

    const allJobs = await Jobs.find({
      createdBy: user._id,
    }).exec();
    res.json(allJobs);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: error.message,
    });
  }
};

exports.createUsersJob = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email }).exec();

    req.body.createdBy = user._id;
    req.body.slug = slugify(req.body.title);

    const newJob = await new Jobs(req.body).save();
    res.json(newJob);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      err: err.message,
    });
  }
};

exports.getSingleJob = async (req, res) => {
  const job = await Jobs.findOne({ slug: req.params.slug }).exec();
  res.json(job);
};

exports.updateJob = async (req, res) => {
  try {
    // In case the slug needs to be updated
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updated = await Jobs.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true }
    ).exec();
    res.json(updated);
  } catch (err) {
    console.log("Job Update Error----->", err);
    res.status(400).json({
      err: err.message,
    });
  }
};

exports.deleteJob = async (req, res) => {
  try {
    const deleted = await Jobs.findOneAndRemove({
      slug: req.params.slug,
    }).exec();
    res.json(deleted);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Job delete failed");
  }
};
