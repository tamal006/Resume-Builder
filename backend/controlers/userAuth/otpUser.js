import userauthmodel from "../../models/userauthmodel.js";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";
const verifyEmailOTP = async (req, res) => {
  const createToken = (id) => {
    //generate a token
    return jwt.sign({ id }, process.env.JWT_SECRET);
  };
  const { email, otp } = req.body;
  try {
    const user = await userauthmodel.findOne({ email });
    const ismatch = await bycrypt.compare(otp, user.verificationCode);
    if (!user || !ismatch)
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    if (Date.now() > user.expireTime)
      return res.status(400).json({ success: false, message: "OTP expired" });
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
export default verifyEmailOTP;
