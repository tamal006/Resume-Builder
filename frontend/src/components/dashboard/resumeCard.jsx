import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
const ResumeCard = ({ resume }) => {
  const navigate = useNavigate();
  const { reload, setReload } = useContext(AuthContext);
  const changeReload = () => {
    setReload((prev) => !prev);
  };
  const handleDelete = async () => {
    const token = localStorage.getItem("token");
    const bcurl = import.meta.env.VITE_API_URL;
    const url = bcurl + "/api/resume/delete";
    const info = {
      token: token,
      resumeId: resume.resumeId,
    };
    const response = await axios.post(url, info);

    if (response.data.success == true) {
      toast.success("Resume Deleted successfully");
    } else {
      toast.error("Resume not Deleted");
    }
    changeReload();
  };
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 w-full max-w-md text-center flex flex-col justify-between">
      <div className="bg-white rounded-2xl shadow-lg p-4 w-full max-w-md text-center">
        <h2 className="font-semibold">Title:{resume.resume.title}</h2>
        <h3 className="font-semibold">Name:{resume.resume.name}</h3>
        <p className="text-sm text-gray-500">
          summery: {resume.resume.summary}
        </p>
      </div>
      <div className="flex justify-center gap-8">
        
        <button
          className="p-1 text-left transition bg-blue-500 text-blue-700 font-semibold 
         px-6 py-2 mt-2 hover:bg-indigo-700 active:scale-95 transition-all rounded-full text-white"
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          className="p-1 text-left transition bg-blue-500 text-blue-700 font-semibold 
         px-6 py-2 mt-2 hover:bg-indigo-700 active:scale-95 transition-all rounded-full text-white"
          onClick={() => {
            navigate(`/resume/${resume.resumeId}`);
            
          }}
        >
          Edit            
        </button>
      </div>
    </div>
  );
};

export default ResumeCard;
