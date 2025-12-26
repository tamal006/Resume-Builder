import jwt from "jsonwebtoken";
import resumemodel from "../../models/resumeData.js";
const gotData = async (req, res) => {
  try {
   
    const user = await resumemodel.findOne({userId:req.verified.id,resumeId:req.body.resumeId});
    console.log(user,req.body);
    res.json({ success: true,data:user });
  } catch (error) {
    res.json({ success: false, message: error });
  }
};
export default gotData;
