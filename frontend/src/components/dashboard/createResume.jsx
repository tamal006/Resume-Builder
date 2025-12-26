import { useNavigate } from "react-router-dom";

const CreateResume = () => {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate(`/resumeEdit`);
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Create New Resume</h1>

      <button
        onClick={handleCreate}
        className="bg-green-500 text-white px-6 py-2 rounded"
      >
        Start from Scratch
      </button>
    </>
  );
};

export default CreateResume;
