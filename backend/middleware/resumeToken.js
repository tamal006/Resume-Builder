import jwt from "jsonwebtoken";
const resumeToken = function (req, res, next) {
  try {
    const token = req.body.token;
    const secret = process.env.JWT_SECRET;
    const verified = jwt.verify(token, secret);
    req.verified = verified;
    next(); // Pass control to the next handler
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};

export default resumeToken;
