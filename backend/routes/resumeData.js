import express from "express";
import createRes from "../controlers/resumeData/createRes.js";
import gotData from "../controlers/resumeData/gotData.js";
import personalData from "../controlers/resumeData/personal.js";
import gotAllData from "../controlers/resumeData/gotAllResume.js";
import skillsData from "../controlers/resumeData/skills.js";
import experience from "../controlers/resumeData/experience.js";
import projectData from "../controlers/resumeData/project.js";
import achievementsData from "../controlers/resumeData/achievements.js";
import educationData from "../controlers/resumeData/education.js";
import resumeToken from "../middleware/resumeToken.js";

const resumeRouter = express.Router();

resumeRouter.post('/create',createRes);
resumeRouter.post('/gotData',gotData);
resumeRouter.post('/gotAllData',gotAllData);
resumeRouter.post('/personal',personalData);
resumeRouter.post('/skills',skillsData);
resumeRouter.post('/project',projectData);
resumeRouter.post('/education',educationData);
resumeRouter.post('/achievements',achievementsData);
resumeRouter.post('/experience',experience);
export default resumeRouter;