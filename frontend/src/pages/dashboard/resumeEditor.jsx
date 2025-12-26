import { useNavigate,useParams } from "react-router-dom";
import { useState,useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
const ResumeEditor = () => {
  const id= Date.now();
  const navigate=useNavigate();
const { resumeData, setResumeData,resId, setresId } = useContext(AuthContext);
const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const bcurl=import.meta.env.VITE_API_URL
            const url = bcurl+"/api/resume/create";
    const info={
      data: resumeData,
      token: token,
      resumeId:id,
    }
       setresId(id);
    console.log("User Input:",info);
     const response = await axios.post(url,info);
    //pass to Backend for store in db
    navigate(`/resume/${id}`);
  };
  return (
     <div className="flex items-center justify-center h-screen">
      <div className="bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
      <h1 className="text-2xl font-bold mb-4">Edit Resume</h1>

      <input
        placeholder="Full Name"
        className="border p-2 w-full mb-3"
        value={resumeData.name}
        onChange={(e) =>
          setResumeData({ ...resumeData, name: e.target.value })
        }
      />

      <input
        placeholder="Job Title"
        className="border p-2 w-full mb-3"
        value={resumeData.title}
        onChange={(e) =>
          setResumeData({ ...resumeData, title: e.target.value })
        }
      />

      <textarea
        placeholder="Summary"
        className="border p-2 w-full mb-3"
        value={resumeData.summary}
        onChange={(e) =>
          setResumeData({ ...resumeData, summary: e.target.value })
        }
      />

      <button onClick={handleSubmit} className="bg-blue-600 text-white px-6 py-2 rounded">
        Save Resume
      </button>
    </div>
    </div>
  );
};

export default ResumeEditor;
