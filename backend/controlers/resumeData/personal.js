import jwt from "jsonwebtoken";
import resumemodel from "../../models/resumeData.js";
const personalData = async (req, res) => {
  try {
    //const user = await resumemodel.findOne({userId:req.verified.id,resumeId: req.body.resumeId});
    // if(user){
    //   user.personal=req.body.personal;
    //   await user.save();
    //   return res.json({ success: true, message: "personal data save"});
    // }
    const userId = req.verified.id;
    const { resumeId, data } = req.body;

    const resume = await resumemodel.findOneAndUpdate(
      { userId, resumeId },
      {
        $set: data,
        // lastEdited: new Date()
      }
      // { new: true, upsert: true }
    );
    res.json({ success: true, message: "create resume from start" });
  } catch (error) {
    res.json({ success: false, message: "error" });
  }
};
export default personalData;
