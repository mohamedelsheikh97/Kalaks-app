const Admin = require("../models/admin");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// login a admin
const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.login(email, password);
    // create a token
    const token = createToken(admin._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup a admin
const signupAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.signup(email, password);
    // create a token
    const token = createToken(admin._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupAdmin, loginAdmin };
