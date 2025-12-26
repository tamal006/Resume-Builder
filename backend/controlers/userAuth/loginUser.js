import userauthmodel from "../../models/userauthmodel.js";
import jwt from "jsonwebtoken";
import bycrypt from "bcrypt";
import validator from "validator";
import nodemailer from "nodemailer";

const loginUser = async (req, res) => {
  const createToken = (id) => {
  //generate a token
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
  const { email, password } = req.body;
  try {
    const user = await userauthmodel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "user not exist" });
    }
    if (!user.isVerified) {
        return res.json({ success: false, message: "user is not verified" });
    }
    const ismatch = await bycrypt.compare(password, user.password);
    const token = createToken(user._id);
     res.json({ success: true, token });
  } catch (error) {
      res.json({ success: false, message: error });
  }
};

export default loginUser;
