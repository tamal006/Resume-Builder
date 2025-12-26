import jwt from "jsonwebtoken";
import resumemodel from "../../models/resumeData.js";
const achievementsData = async (req, res) => {
  try {
    const user = await resumemodel.findOne({userId:req.verified.id,resumeId: req.body.resumeId});
    if(user){
      user.achievements=req.body.achievements;
      await user.save();
      return res.json({ success: true, message: "personal data save"});
    }
    
    res.json({ success: true,message: "create resume from start" });
  } catch (error) {
    res.json({ success: false, message: "error" });
  }
};
export default achievementsData;