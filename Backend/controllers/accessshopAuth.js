const AccessoriesShop = require("../models/accessories_shop");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// login a accessoriesShop
const loginAccessoriesShop = async (req, res) => {
  const { email, password } = req.body;
  try {
    const accessoriesShop = await AccessoriesShop.login(email, password);
    // create a token
    const token = createToken(accessoriesShop._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup a accessoriesShop
const signupAccessoriesShop = async (req, res) => {
  const { email, password } = req.body;
  try {
    const accessoriesShop = await AccessoriesShop.signup(email, password);
    // create a token
    const token = createToken(accessoriesShop._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupAccessoriesShop, loginAccessoriesShop };
