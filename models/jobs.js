const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      lowercase: true,
      unique: true,
    },
    company: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    contactEmail: {
      type: String,
      required: true,
    },
    createdBy: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
