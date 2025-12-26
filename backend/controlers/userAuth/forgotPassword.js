import userauthmodel from "../../models/userauthmodel.js";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";

const forgotPassword = async (req, res) => {
  const createToken = (id) => {
      //generate a token
      return jwt.sign({ id },process.env.JWT_SECRET);
    };
    const salt = await bycrypt.genSalt(10);
    
  const { email, password, otp } = req.body;
  try {
    const user = await userauthmodel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "user not exist" });
    }
    const ismatch = await bycrypt.compare(otp, user.verificationCode);
    if (!user || !ismatch)
      return res.status(400).json({ message: "Invalid OTP" });
    if (Date.now() > user.expireTime)
      return res.status(400).json({ message: "OTP expired" });
    const hashedPassword = await bycrypt.hash(password, salt);
    user.password=hashedPassword;
    user.isVerified = true;
    user.verificationCode = undefined;
    user.expireTime = undefined;
    await user.save();
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    res.json({ success: false, message: error });
  }
};
export default forgotPassword;