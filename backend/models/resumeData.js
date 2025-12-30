// models/Resume.js
import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    resumeId: { type: String, required: true },
    resume: {
      name: String,
      title: String,
      summary: String,
    },
    personal: {
      name: String,
      email: String,
      phone: String,
      linkedin: String,
      github: String,
      summary: String,
    },

    skills: [
      {
        category: String,
        items: [String],
      },
    ],

    projects: [
      {
        title: String,
        points: [String],
      },
    ],

    experience: [
      {
        company: String,
        role: String,
        duration: String,
        points: [String],
      },
    ],

    education: [
      {
        institute: String,
        degree: String,
        duration: String,
        cgpa: String,
      },
    ],

    achievements: [String],
  },
  { minimize: false }
);

const resumemodel =
  mongoose.model.resume || mongoose.model("resume", resumeSchema); //make the model with name food and if it already exists use that

export default resumemodel;
