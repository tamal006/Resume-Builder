import jwt from "jsonwebtoken";
import resumemodel from "../../models/resumeData.js";
const gotAllData = async (req, res) => {
  try {
    const user = await resumemodel.find({userId:req.verified.id});
    res.json({ success: true,data:user });
  } catch (error) {
    res.json({ success: false, message: error });
  }
};
export default gotAllData;
