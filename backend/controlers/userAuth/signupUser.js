import userauthmodel from "../../models/userauthmodel.js";
import jwt from "jsonwebtoken";
import bycrypt from "bcrypt";
import validator from "validator";
import nodemailer from "nodemailer";

//resister user
const signupUser = async (req, res) => {
  const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_EMAIL, // your Gmail
    pass: process.env.SMTP_PASSWORD,
  },
});

//create token
const createToken = (id) => {
  //generate a token
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
  const { name, password, email } = req.body;
  const salt = await bycrypt.genSalt(10);
  try {
    const user = await userauthmodel.findOne({ email });
    //user already exist
    if (user) {
      //user is otp verified
      if (user.isVerified) {
        return res.json({ success: false, message: "user already exist" });
      }
      //user not otp verified
      else {
        //validating emailformat
        if (!validator.isEmail(email)) {
          return res.json({
            success: false,
            message: "please enter valid email",
          });
        }

        //strong password
        if (password.length < 8) {
          return res.json({
            success: false,
            message: "please enter strong password",
          });
        }

        //hashing user password

        const hashedPassword = await bycrypt.hash(password, salt);
        //hashing the otp
        const otp = String(Math.floor(100000 + Math.random() * 900000)); // 6-digit
        const expireTime = Date.now() + 10 * 60 * 1000; //10 min
        const hashedotp = await bycrypt.hash(otp, salt);
        //use new model to save in db
        user.password = hashedPassword;
        user.verificationCode = hashedotp;
        user.expireTime = expireTime;
        //save data in db
        await user.save();
        //send otp to email
        const info = await transporter.sendMail({
          from: `"Resume Builder" <${process.env.JWT_SECRET}>`,
          to: `${email}`,
          subject: "Hello ✔",
          text: `${otp}`, // plain‑text body
          html: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>OTP Verification</title>
  </head>
  <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color:#f4f4f4;">
    
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding: 40px 0;">
          
          <table width="400" cellpadding="0" cellspacing="0" style="background:#ffffff; padding:20px; border-radius:8px;">
            
            <tr>
              <td align="center">
                <h2 style="margin:0; color:#333;">OTP Verification</h2>
              </td>
            </tr>

            <tr>
              <td style="padding:20px 0; color:#555; font-size:14px;">
                Hello,<br /><br />
                Your One-Time Password (OTP) for verification is:
              </td>
            </tr>

            <tr>
              <td align="center" style="padding: 10px 0;">
                <div style="
                  font-size: 28px;
                  font-weight: bold;
                  letter-spacing: 6px;
                  color: #2f855a;
                ">
                  ${otp}
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding-top:20px; color:#777; font-size:12px;">
                This OTP is valid for <strong>10 minutes</strong>.<br />
                If you did not request this, please ignore this email.
              </td>
            </tr>

            <tr>
              <td style="padding-top:30px; color:#999; font-size:12px;" align="center">
                © 2025 Resume Builder
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>
</html>
`,
          // HTML body
        });

        console.log("Message sent:", info.messageId);
        res.json({ success: true, message: "otp send" });
      }
    }
    //user not exist
    else {
      //validating emailformat
      if (!validator.isEmail(email)) {
        return res.json({
          success: false,
          message: "please enter valid email",
        });
      }

      //strong password
      if (password.length < 8) {
        return res.json({
          success: false,
          message: "please enter strong password",
        });
      }

      //hashing user password

      const hashedPassword = await bycrypt.hash(password, salt);
      //hashing the otp
      const otp = String(Math.floor(100000 + Math.random() * 900000)); // 6-digit
      const expireTime = Date.now() + 10 * 60 * 1000; //10 min
      const hashedotp = await bycrypt.hash(otp, salt);
      //use new model to save in db
      const newUser = new userauthmodel({
        name: name,
        email: email,
        password: hashedPassword,
        verificationCode: hashedotp,
        expireTime: expireTime,
      });
      //save data in db
      const user = await newUser.save();
      //send otp to email
      const info = await transporter.sendMail({
        from: `"Resume Builder" <${process.env.JWT_SECRET}>`,
        to: `${email}`,
        subject: "Hello ✔",
        text: `${otp}`, // plain‑text body
        html: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>OTP Verification</title>
  </head>
  <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color:#f4f4f4;">
    
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding: 40px 0;">
          
          <table width="400" cellpadding="0" cellspacing="0" style="background:#ffffff; padding:20px; border-radius:8px;">
            
            <tr>
              <td align="center">
                <h2 style="margin:0; color:#333;">OTP Verification</h2>
              </td>
            </tr>

            <tr>
              <td style="padding:20px 0; color:#555; font-size:14px;">
                Hello,<br /><br />
                Your One-Time Password (OTP) for verification is:
              </td>
            </tr>

            <tr>
              <td align="center" style="padding: 10px 0;">
                <div style="
                  font-size: 28px;
                  font-weight: bold;
                  letter-spacing: 6px;
                  color: #2f855a;
                ">
                  ${otp}
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding-top:20px; color:#777; font-size:12px;">
                This OTP is valid for <strong>10 minutes</strong>.<br />
                If you did not request this, please ignore this email.
              </td>
            </tr>

            <tr>
              <td style="padding-top:30px; color:#999; font-size:12px;" align="center">
                © 2025 Resume Builder
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>
</html>
`,
        // HTML body
      });

      console.log("Message sent:", info.messageId);
      res.json({ success: true, message: "otp send" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "otp not send" });
  }
};
export default signupUser;
