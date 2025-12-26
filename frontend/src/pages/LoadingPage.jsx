// import { useNavigate } from "react-router-dom";

const LoadingPage = () => {
//   const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mb-6"></div>

      {/* Text */}
      <p className="text-gray-700 mb-4">Loading, please wait...</p>

      {/* Back to Home */}
      {/* <button
        onClick={() => navigate("/")}
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Back to Home
      </button> */}
    </div>
  );
};

export default LoadingPage;
