import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const VerifyOTP = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

 const [data, setData] = useState({
    "email": `${email}`,
    "otp": "",
  });
const onChangeHandeler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  useEffect(() => {
    if (!email) navigate("/auth/signup");
    console.log(email);
  }, [email, navigate]);
  useEffect(() => {
    console.log(data);
  }, [data]);
  const handleVerify = async () => {
    //API CALL → verify OTP
    const bcurl=import.meta.env.VITE_API_URL
            const url = bcurl+"/api/user/otp";
     const response = await axios.post(url, data);
    if (response.data.success) {
      //store jwt token in localstorage and navigate to 
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard", { replace: true });
    } else {
      alert(response.data.message);
    }
  };
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Verify OTP</h2>
      <p className="text-sm mb-3 text-gray-600">
        OTP sent to <strong>{email}</strong>
      </p>
      <input
         id="otp"
          name="otp"
          onChange={onChangeHandeler}
          value={data.otp}
        className="border p-2 w-full mb-3 text-center tracking-widest"
        placeholder="Enter OTP"
        maxLength={6}
      />
      <button
        onClick={handleVerify}
        className="bg-blue-500 text-white w-full py-2 rounded"
      >
        Verify OTP
      </button>
    </>
  );
};

export default VerifyOTP;
