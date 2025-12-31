import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; // or import { jwtDecode } from 'jwt-decode';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [reload, setReload] = useState(false);
  const [response, setResponse] = useState([]);
  const [resId, setresId] = useState("");
  const [dashboardMenu, setDashboardMenu] = useState("myResume");
  const [userId, setUserId] = useState("");
  const [resumeData, setResumeData] = useState({
    name: "",
    title: "",
    summary: "",
  });
  const [formData, setFormData] = useState({});
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const fetchData = async () => {
    const token = localStorage.getItem("token");
    const bcurl = import.meta.env.VITE_API_URL;
    const url = bcurl + "/api/resume/gotData";
    const info1 = {
      token: token,
      resumeId: resId,
    };
    const response1 = await axios.post(url, info1);
    const resume = response1.data?.data;

    if (!resume) {
      setSkills([]);
      setFormData({});
      setExperience([]);
      setProjects([]);
      setAchievements([]);
      setEducation([]);
      return;
    }

    setSkills(resume.skills || []);
    setFormData(resume.personal || {});
    setExperience(resume.experience || []);
    setProjects(resume.projects || []);
    setAchievements(resume.achievements || []);
    setEducation(resume.education || []);
  };
  const fetchAllData = async () => {
    const token = localStorage.getItem("token");
    const bcurl = import.meta.env.VITE_API_URL;
    const url = bcurl + "/api/resume/gotAllData";
    const response1 = await axios.post(url, { token: token });
    setResponse(response1.data.data);
  };
  useEffect(() => {
    if (dashboardMenu == "myResume") {
      fetchAllData();
    }
  }, [dashboardMenu, reload]);
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
    response,
    setResponse,
    reload,
    setReload,
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
