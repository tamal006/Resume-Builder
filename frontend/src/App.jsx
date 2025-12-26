import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import DashboardLayout from "./routes/dashboard/DashboardLayout";
import AuthLayout from "./routes/authentication/AuthLayout";
import ContactUs from "./routes/contactUs/ContactUs";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Forgot from "./pages/auth/Forget";
import VerifyOTP from "./pages/auth/VerifyOTP";
import CreateResumeLayout from "./routes/resume/CreateResumeLayout";
import PersonalInfoForm from "./components/resume/PersonalInfoForm";
import SkillsForm from "./components/resume/SkillsForm";
import ForgotPassword from "./pages/auth/forgetPassword";
import LoadingPage from "./pages/LoadingPage";
import ProjectInfo from "./components/resume/ProjectsInfo";
import AchivementForm from "./components/resume/AchivementForm";
import EducationForm from "./components/resume/EducationForm";
import ExperienceForm from "./components/resume/ExperienceForm";
import ProtectedRoute from "./routes/authentication/ProtectedRoute";
import ResumeEditor from "./pages/dashboard/resumeEditor";
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <>
    <ToastContainer position="top-center" autoClose={500} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="verify-otp" element={<VerifyOTP />} />
          <Route path="forgot" element={<Forgot />} />
          <Route path="forgotPassword" element={<ForgotPassword/>} />
        </Route>
        <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>} />
        <Route path="/resumeEdit" element={<ProtectedRoute><ResumeEditor /></ProtectedRoute>} />
        <Route path="/resume/:id" element={<ProtectedRoute><CreateResumeLayout /></ProtectedRoute>}>
          <Route index element={<PersonalInfoForm />} />
          <Route path="skills" element={<SkillsForm />} />
          <Route path="project" element={<ProjectInfo />} />
          <Route path="achivement" element={<AchivementForm />} />
          <Route path="education" element={<EducationForm />} />
          <Route path="experience" element={<ExperienceForm/>} />
        </Route>
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/loading" element={<LoadingPage />} />
      </Routes>
    </>
  );
};

export default App;
