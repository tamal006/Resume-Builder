import { useNavigate, Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
const Forgot = () => {
  const navigate = useNavigate();
  //  single state object
  const [data, setData] = useState({
    email: "",
  });
  //on any input change it change the data
  const onChangeHandeler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  useEffect(() => {
    console.log(data);
  }, [data]);

  //  submit
  const handleForgot = async (e) => {
    e.preventDefault();
    navigate("/loading", { replace: true });
    // API call here → send OTP
       const bcurl=import.meta.env.VITE_API_URL
            const url = bcurl+"/api/user/resendotp";
    const response = await axios.post(url, data);
    console.log(response.data);
    if (response.data.success) {
      //store jwt token in localstorage and navigate to
      navigate("/auth/forgotPassword", {
        replace: true,
        state: { email: data.email, fromSignUp: true },
      });
    } else {
      alert(response.data.message);
    }
  };
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>

      <input
        id="email"
        name="email"
        value={data.email}
        onChange={onChangeHandeler}
        className="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
        type="email"
        placeholder="Enter your email"
        required
      />
      <button
        onClick={handleForgot}
        className="bg-green-500 text-white w-full py-2 rounded"
      >
        Send Reset Link
      </button>
    </>
  );
};

export default Forgot;
