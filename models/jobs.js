const mongoose = require("mongoose");
// const { ObjectId } = mongoose.Schema;

const jobSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
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
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
