import resumemodel from "../../models/resumeData.js";
const deleteResume = async (req, res) => {
  try {
    const resumeId= req.body.resumeId;
    const userId = req.verified.id;
    await resumemodel.deleteOne({ resumeId, userId });
    res.json({ success: true, message: "Resume deleted" });
  } catch (err) {
    res.status(500).json({ success: false });
  }
};
export default deleteResume;