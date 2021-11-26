const User = require("../models/user");

exports.createOrUpdateUser = async (req, res) => {
  const { name, email } = req.user;

  const user = await User.findOneAndUpdate(
    { email },
    { name: email.split("@")[0] },
    { new: true }
  );

  if (user) {
    console.log("USER UPDATED", user);
    res.json(user);
  } else {
    const newUser = await new User({
      email,
      name: email.split("@")[0],
    }).save();
    console.log("USER CREATED", newUser);
    res.json(newUser);
  }
};

// Persist Logged in Users Credentials in DB
exports.currentUser = async (req, res) => {
  User.findOne({
    email: req.user.email,
  }).exec((err, user) => {
    if (err) throw new Error(err);
    res.json(user);
  });
};
