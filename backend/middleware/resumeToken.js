import jwt from "jsonwebtoken";
const resumeToken = function (req, res, next) {
  const token = req.body.token;
      const secret = process.env.JWT_SECRET;
      const verified = jwt.verify(token, secret);
      req.verified=verified;
  next(); // Pass control to the next handler
};

export default resumeToken;