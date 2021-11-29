const Jobs = require("../models/jobs");

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
