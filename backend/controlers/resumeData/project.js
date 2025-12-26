import jwt from "jsonwebtoken";
import resumemodel from "../../models/resumeData.js";
const projectData = async (req, res) => {
  try {
    const user = await resumemodel.findOne({userId:req.verified.id,resumeId: req.body.resumeId});
    if(user){
      user.projects=req.body.projects;
      await user.save();
      return res.json({ success: true, message: "projects data save"});
    }
    console.log(req.body)
    
    res.json({ success: true,message: "create resume from start" });
  } catch (error) {
    res.json({ success: false, message: "error" });
  }
};
export default projectData;