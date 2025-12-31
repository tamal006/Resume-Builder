import express from "express";
import createRes from "../controlers/resumeData/createRes.js";
import gotData from "../controlers/resumeData/gotData.js";
import personalData from "../controlers/resumeData/personal.js";
import gotAllData from "../controlers/resumeData/gotAllResume.js";
import  deleteResume  from "../controlers/resumeData/deleteResume.js";

const resumeRouter = express.Router();

resumeRouter.post('/create',createRes);
resumeRouter.post('/gotData',gotData);
resumeRouter.post('/gotAllData',gotAllData);
resumeRouter.post('/personal',personalData);
resumeRouter.post('/delete',deleteResume);
export default resumeRouter;