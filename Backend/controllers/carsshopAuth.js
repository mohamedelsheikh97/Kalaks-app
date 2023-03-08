const CarsShop = require("../models/cars_shop");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// login a carsShop
const loginCarsShop = async (req, res) => {
  const { email, password } = req.body;
  try {
    const carsShop = await CarsShop.login(email, password);
    // create a token
    const token = createToken(carsShop._id);
    res.status(200).json({ email: email, token: token, id: carsShop._id });
  } catch (error) {
    res.json({ error: error.message });
  }
};

// signup a carsShop
const signupCarsShop = async (req, res) => {
  const { email, password, name, image } = req.body;
  try {
    const carsShop = await CarsShop.signup(email, password, name, image);
    // create a token
    const token = createToken(carsShop._id);
    res.status(200).json({ email, token, name, image });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = { signupCarsShop, loginCarsShop };
