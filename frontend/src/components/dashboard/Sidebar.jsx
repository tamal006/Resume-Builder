import { NavLink } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
const Sidebar = () => {
  const navigate=useNavigate();
  const { dashboardMenu, setDashboardMenu } = useContext(AuthContext);

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-100 shadow-sm p-5">
      {/* Logo / Title */}
      <h2 className="text-2xl font-bold text-green-600 mb-8">Resume Builder</h2>
      <nav className="flex flex-col items-start gap-2">
        {/* Navigation */}

        <button
          onClick={() => {
            setDashboardMenu("myResume");
          }}
          className={
            dashboardMenu === "myResume"
              ? "bg-green-200 text-green-700 shadow-sm p-2 rounded-xl"
              : "text-gray-600 hover:bg-green-50 hover:text-green-600 p-2 rounded-xl"
          }
        >
          📄 My Resumes
        </button>
        <button
          onClick={() => {
            setDashboardMenu("createResume");
          }}
          className={
            dashboardMenu === "createResume"
              ? "bg-green-100 text-green-700 shadow-sm p-2 rounded-xl"
              : "text-gray-600 hover:bg-green-50 hover:text-green-600 p-2 rounded-xl"
          }
        >
          ➕ Create Resume
        </button>
        <button
          onClick={() => {navigate('/')}}
          className="text-gray-600 hover:bg-green-50 hover:text-green-600 p-2 rounded-xl"
        >
          ➕ Home
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
