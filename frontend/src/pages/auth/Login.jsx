import { useNavigate, Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  //on any input change it change the data
  const onChangeHandeler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const navigate = useNavigate();
  //  single state object
  const handleLogout = (event) => {
    localStorage.removeItem("token");
    navigate("/", { replace: true }); // no back to protected pages
  };
  useEffect(() => {
    console.log(data);
  }, [data]);

  //  submit
  const handleLogin = async (e) => {
    e.preventDefault();
    navigate("/loading", { replace: true });
    // API call here → send OTP
    const bcurl=import.meta.env.VITE_API_URL
            const url = bcurl+"/api/user/login";
    const response = await axios.post(url, data);
    if (response.data.success) {
      //store jwt token in localstorage and navigate to
      // if(localStorage.getItem("token")!=null){

      // }
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard", { replace: true });
    } else {
      alert(response.data.message);
    }
  };
  return (
    <>
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Welcome back
      </h2>
      <form onSubmit={handleLogin}>
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
        <input
          id="password"
          name="password"
          value={data.password}
          onChange={onChangeHandeler}
          className="w-full bg-transparent border mt-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="password"
          placeholder="Enter your password"
          required
        />
        <div className="text-right py-4">
          <Link to="forgot" className="text-blue-600 underline">
            Forgot password/<br/>verify email?
          </Link>
        </div>
        <button
          type="submit"
          className="w-full mb-3 bg-indigo-500 py-2.5 rounded-full text-white"
        >
          Log in
        </button>
      </form>
      <p className="text-center mt-4">
        Don’t have an account?
        <Link to="signup" className="text-blue-500 underline">
          Signup
        </Link>
      </p>
      <button
      onClick={handleLogout}
        type="button"
        className="w-full flex items-center gap-2 justify-center mt-5 bg-black py-2.5 rounded-full text-white"
      >
        {/* <img
          className="h-4 w-4"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/appleLogo.png"
          alt="appleLogo"
        /> */}
        Log out
      </button>
      {/* <button
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

export default Login;
