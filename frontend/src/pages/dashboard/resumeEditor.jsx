import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";

const ResumeEditor = () => {
  const id = "" + Date.now();
  const navigate = useNavigate();
  const { resumeData, setResumeData, setresId } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const base = import.meta.env.VITE_API_URL;
    const url = base + "/api/resume/create";

    const info = {
      data: resumeData,
      token,
      resumeId: id,
    };
    setResumeData({
    name: "",
    title: "",
    summary: "",
  });
    setresId(id);
    await axios.post(url, info);
    navigate(`/resume/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4">

      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-8 space-y-6"
      >
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Edit Your Resume
          </h1>
          <p className="text-gray-500 mt-1">
            Fill in your details to build a professional, ATS-friendly resume.
          </p>
        </div>

        {/* Name */}
        <div>
          <label className="text-sm font-medium text-gray-600">
            Full Name
          </label>
          <input
            placeholder="John Doe"
            className="mt-1 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={resumeData.name}
            onChange={(e) =>
              setResumeData({ ...resumeData, name: e.target.value })
            }
          />
        </div>

        {/* Title */}
        <div>
          <label className="text-sm font-medium text-gray-600">
            Job Title
          </label>
          <input
            placeholder="Full Stack Developer"
            className="mt-1 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={resumeData.title}
            onChange={(e) =>
              setResumeData({ ...resumeData, title: e.target.value })
            }
          />
        </div>

        {/* Summary */}
        <div>
          <label className="text-sm font-medium text-gray-600">
            Professional Summary
          </label>
          <textarea
            placeholder="Brief summary about you..."
            rows="4"
            className="mt-1 w-full px-4 py-3 border rounded-xl resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={resumeData.summary}
            onChange={(e) =>
              setResumeData({ ...resumeData, summary: e.target.value })
            }
          />
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-md transition"
        >
          Save & Continue
        </button>
      </form>
    </div>
  );
};

export default ResumeEditor;
