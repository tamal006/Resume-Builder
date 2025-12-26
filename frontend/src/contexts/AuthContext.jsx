import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; // or import { jwtDecode } from 'jwt-decode';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const [resId, setresId] = useState("");
  const [dashboardMenu, setDashboardMenu] = useState("myResume");
  const [userId, setUserId] = useState("");
  const [resumeData, setResumeData] = useState({
    name: "",
    title: "",
    summary: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    summary: "",
  });
  const [skills, setSkills] = useState([{ category: "", items: "" }]);
  const [projects, setProjects] = useState([{ title: "", points: [] }]);
  const [achievements, setAchievements] = useState([""]);
  const [education, setEducation] = useState([
    {
      institute: "",
      degree: "",
      duration: "",
      cgpa: "",
    },
  ]);
  const [experience, setExperience] = useState([
    {
      company: "",
      role: "",
      duration: "",
      points: [""],
    },
  ]);
  const fetchData = async () => {
    const token = localStorage.getItem("token");
     const bcurl=import.meta.env.VITE_API_URL
            const url = bcurl+"/api/resume/gotData";
    const info1 = {
      token: token,
      resumeId: resId,
    };
    const response1 = await axios.post(url, info1);
    setSkills(response1.data.data.skills);
    console.log("zzz", response1, resId);
    setFormData(response1.data.data.personal);
    console.log("zzz", response1, formData);
    setExperience(response1.data.data.experience);
    setProjects(response1.data.data.projects);
    setAchievements(response1.data.data.achievements);
    setEducation(response1.data.data.education);
  };
  useEffect(() => {
    if (resId) {
      fetchData();
    }
  }, [resId]);

  const currentValue = {
    dashboardMenu,
    setDashboardMenu,
    formData,
    setFormData,
    skills,
    setSkills,
    projects,
    setProjects,
    achievements,
    setAchievements,
    education,
    setEducation,
    experience,
    setExperience,
    resumeData,
    setResumeData,
    resId,
    setresId,
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      console.log(decoded); // Shows payload data
      setUserId(decoded); // your JWT token
    } else {
      console.log("okk");
    }
  }, []);
  return (
    <AuthContext.Provider value={currentValue}>{children}</AuthContext.Provider>
  );
};
