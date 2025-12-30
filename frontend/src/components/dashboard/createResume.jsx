import { useNavigate } from "react-router-dom";

const CreateResume = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md text-center">

        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-3xl">
          📄
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-3">
          Create New Resume
        </h1>

        {/* Description */}
        <p className="text-gray-500 mb-8">
          Start building your professional, ATS-friendly resume with our modern templates and real-time editor.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/resumeEdit")}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition shadow-md"
        >
          Start from Scratch
        </button>

      </div>

    </div>
  );
};

export default CreateResume;
