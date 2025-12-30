import { useNavigate } from "react-router-dom";

const ResumeCard = ({ resume }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 w-full max-w-md text-center">
      <h2 className="font-semibold">Title:{resume.resume.title}</h2>
      <h3 className="font-semibold">Name:{resume.resume.name}</h3>
      <p className="text-sm text-gray-500">summery: {resume.resume.summary}</p>

      <button
        className="p-1 text-left transition bg-blue-500 text-blue-700 font-semibold 
         px-6 py-2 mt-2 hover:bg-indigo-700 active:scale-95 transition-all rounded-full text-white"
        onClick={() => {navigate(`/resume/${resume.resumeId}`);window.location.reload();}}
      >
        Edit
      </button>
    </div>
  );
};

export default ResumeCard;
