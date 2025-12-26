import express from "express";
import signupUser from "../controlers/userAuth/signupUser.js";
import verifyEmailOTP from "../controlers/userAuth/otpUser.js";
import resendOtp from "../controlers/userAuth/resendOtp.js";
import loginUser from "../controlers/userAuth/loginUser.js";
import forgotPassword from "../controlers/userAuth/forgotPassword.js";

const userRouter = express.Router();

userRouter.post('/signup',signupUser);
userRouter.post('/otp',verifyEmailOTP);
userRouter.post('/resendotp',resendOtp); 
userRouter.post('/login',loginUser);
userRouter.post('/forgot',forgotPassword);
export default userRouter;