import { useNavigate } from "react-router-dom";

const ResumeCard = ({ resume }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold">Title:{resume.resume.title}</h2>
      <h3 className="font-semibold">Name:{resume.resume.name}</h3>
      <p className="text-sm text-gray-500">summery: {resume.resume.summary}</p>

      <button
        className="mt-3 text-blue-600"
        onClick={() => {navigate(`/resume/${resume.resumeId}`);window.location.reload();}}
      >
        Edit
      </button>
    </div>
  );
};

export default ResumeCard;
