import jwt from "jsonwebtoken";
import resumemodel from "../../models/resumeData.js";
const createRes = async (req, res) => {
  try {
    const user = await resumemodel.findOne({
      userId: req.verified.id,
      resumeId: req.body.resumeId,
    });

    if (user) {
      return res.json({ success: false, message: "create a new resume" });
    }
    const newUser = new resumemodel({
      userId: req.verified.id,
      resumeId: req.body.resumeId,
      resume: req.body.data,
    });
    await newUser.save();

    res.json({ success: true });
  } catch (error) {
    res.json({ success: false, message: "error" });
  }
};
export default createRes;
