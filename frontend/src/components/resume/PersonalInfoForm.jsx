import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import axios from "axios";
const PersonalInfoForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { formData, setFormData, resId, setresId } = useContext(AuthContext);
  const [call, setCall] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleValue = (k) => {
    return formData[k] ? formData[k] : "";
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const bcurl = import.meta.env.VITE_API_URL;
      const url = bcurl + "/api/resume/personal";
      const info = {
        personal: formData,
        token: token,
        resumeId: id,
      };
      const response = await axios.post(url, info);
      if(response.data.success==true){
       toast.success("Data saved successfully");
      }
      else{
        toast.error("Data not saved");
      }
      setCall(!call);
    } catch (error) {
      console.log(error);
    }
  };
  const nextInfo = (e) => {
    e.preventDefault();
    // API call here → send OTP

    // only pass email

    navigate(`/resume/${id}/skills`);
  };
  useEffect(() => {
    if (id) setresId(id);
  }, [id, setresId]);
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl bg-white mb-100 md:p-8 rounded-lg shadow"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Personal Information
      </h2>

      {/* Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Ankit Sharma"
          value={handleValue("name")}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Contacts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="ankitsharma@gmail.com"
            value={handleValue("email")}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="+91 9876543210"
            value={handleValue("phone")}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">LinkedIn</label>
          <input
            type="text"
            name="linkedin"
            placeholder="linkedin.com/in/ankitsharma"
            value={handleValue("linkedin")}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">GitHub</label>
          <input
            type="text"
            name="github"
            placeholder="github.com/ankitsharma"
            value={handleValue("github")}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
      </div>

      {/* Summary */}
      <div className="mt-4">
        <label className="block text-sm font-medium mb-1">
          Professional Summary
        </label>
        <textarea
          name="summary"
          rows="5"
          placeholder="A highly motivated Computer Science undergraduate..."
          value={handleValue("summary")}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 resize-none"
        />
      </div>

      {/* Submit */}
      <div className="flex flex-col">
        <div className="flex  gap-8">
          <button
            onClick={() => navigate(-1)}
            className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            ← Back
          </button>
          <button
            type="button"
            onClick={nextInfo}
            className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            next
          </button>
        </div>
        <button
          type="submit"
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default PersonalInfoForm;
