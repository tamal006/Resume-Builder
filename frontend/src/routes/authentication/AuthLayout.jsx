import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { Outlet,replace,useNavigate } from "react-router-dom";
const AuthLayout = () => {
  const navigate=useNavigate();
  const [auth, setAuth] = useState("login");
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
      <div className="flex items-center justify-end"><button onClick={()=>{navigate("/",{ replace: true })}} ><ImCross /></button></div>
      <Outlet/>
      </div>
    </div>
  );
};

export default AuthLayout;
