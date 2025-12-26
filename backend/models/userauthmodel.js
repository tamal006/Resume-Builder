import mongoose from "mongoose";

const userauthSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    verificationCode: { type: String },
    expireTime: { type: Number, default: 0 },
    cartData: { type: Object, default: {} },
  },
 {minimize:false}
);

const userauthmodel =
  mongoose.model.userauth || mongoose.model("userauth", userauthSchema); //make the model with name food and if it already exists use that

export default userauthmodel;