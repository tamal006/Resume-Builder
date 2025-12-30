
import { useContext, useEffect, useState } from "react";
import Sidebar from "./../../components/dashboard/Sidebar";
import DashboardHome from './../../components/dashboard/dashboardHome'
import { AuthContext } from "../../contexts/AuthContext";
import CreateResume from "./../../components/dashboard/createResume";
import axios from "axios";

const DashboardLayout = () => {
    const { dashboardMenu, setDashboardMenu } = useContext(AuthContext);
    const [response,setResponse]=useState([]);
    const fetchData=async()=>{
        const token = localStorage.getItem("token");
        const bcurl=import.meta.env.VITE_API_URL
            const url = bcurl+"/api/resume/gotAllData";
    const response1 = await axios.post(url,{token:token});
    setResponse(response1.data.data)    
};
    useEffect(()=>{
      if(dashboardMenu=="myResume"){
        fetchData();
      }
    },[dashboardMenu])
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