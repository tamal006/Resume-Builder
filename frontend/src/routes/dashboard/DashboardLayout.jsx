
import { useContext, useEffect, useState } from "react";
import Sidebar from "./../../components/dashboard/Sidebar";
import DashboardHome from './../../components/dashboard/dashboardHome'
import { AuthContext } from "../../contexts/AuthContext";
import CreateResume from "./../../components/dashboard/createResume";
import axios from "axios";

const DashboardLayout = () => {
    const { dashboardMenu, setDashboardMenu,response,setResponse } = useContext(AuthContext);
    
  return (
    <div className="flex min-h-screen ">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100">
        {dashboardMenu==="createResume"?<CreateResume />:<DashboardHome resumes={response}/>}
        
      </main>
    </div>
  );
};

export default DashboardLayout;