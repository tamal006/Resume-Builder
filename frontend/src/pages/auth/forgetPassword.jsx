import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import axios from "axios";

const ForgotPassword = () => {
  const location = useLocation();
  const email = location.state?.email;
  const [data, setData] = useState({
    email: `${email}`,
    password: "",
    otp: "",
  });
  //on any input change it change the data
  const onChangeHandeler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const navigate = useNavigate();
  //  single state object

  useEffect(() => {
    console.log(data);
  }, [data]);

  //  submit
  const handleSignup = async (e) => {
    e.preventDefault();
    navigate("/loading", { replace: true });
    // API call here → send OTP
    const bcurl=import.meta.env.VITE_API_URL
            const url = bcurl+"/api/user/forgot";
    const response = await axios.post(url, data);

    if (response.data.success) {
      //store jwt token in localstorage and navigate to /
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard", {
        replace: true,
        state: { email: data.email, fromSignUp: true },
      });
    } else {
      alert(response.data.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSignup}>
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Signup Here
        </h2>
        <input
          id="password"
          name="password"
          onChange={onChangeHandeler}
          value={data.password}
          className="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="text"
          placeholder="Enter new password"
          required
        />
        <input
          id="otp"
          name="otp"
          onChange={onChangeHandeler}
          value={data.otp}
          className="w-full bg-transparent border mt-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="number"
          placeholder="Enter your OTP"
          required
        />

        <button
          type="submit"
          className="w-full mb-3 bg-indigo-500 py-2.5 rounded-full text-white mt-5"
        >
          Create Account
        </button>
      </form>
      <p className="text-center mt-4">
        {" "}
        Already have an account?
        <Link to="/auth" className="text-blue-500 underline">
          Login
        </Link>
      </p>
      {/* <button
        type="button"
        className="w-full flex items-center gap-2 justify-center mt-5 bg-black py-2.5 rounded-full text-white"
      >
        <img
          className="h-4 w-4"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/appleLogo.png"
          alt="appleLogo"
        />
        Log in with Apple
      </button>
      <button
        type="button"
        className="w-full flex items-center gap-2 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800"
      >
        <img
          className="h-4 w-4"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png"
          alt="googleFavicon"
        />
        Log in with Apple
      </button> */}
    </>
  );
};

export default ForgotPassword;
