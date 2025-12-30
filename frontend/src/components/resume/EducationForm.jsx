import { useRef, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
const EducationForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { education, setEducation, resId, setresId } = useContext(AuthContext);
  const inputRefs = useRef([]);

  const handleChange = (index, field, value) => {
    const updated = [...education];
    updated[index][field] = value;
    setEducation(updated);
  };

  const addEducation = () => {
    setEducation((prev) => [
      ...prev,
      { institute: "", degree: "", duration: "", cgpa: "" },
    ]);
  };

  const removeEducation = (index) => {
    setEducation(education.filter((_, i) => i !== index));
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const url1 = import.meta.env.VITE_API_URL;
    const url = url1 + "/api/resume/education";
    const info = {
      education: education,
      token: token,
      resumeId: id,
    };
    const response = await axios.post(url, info);
    if (response.data.success == true) {
      toast.success("Data saved successfully");
    } else {
      toast.error("Data not saved");
    }
    console.log(info);
  };
  const nextInfo = (e) => {
    e.preventDefault();
    // API call here → send OTP

    // only pass email
    navigate(`/resume/${id}`);
  };
  // 🔥 Auto-focus last institute field when added
  useEffect(() => {
    if (id) setresId(id);
    const lastIndex = education.length - 1;
    inputRefs.current[lastIndex]?.focus();
  }, [id, setresId, education.length]);

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 md:p-8 shadow rounded-lg mt-20 mb-10">
      <h2 className="text-2xl font-bold mb-6">Education</h2>

      {education.map((edu, index) => (
        <div key={index} className="border rounded-lg p-6 mb-6 relative">
          {/* Institute */}
          <input
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            placeholder="Institute / University"
            value={edu.institute}
            onChange={(e) => handleChange(index, "institute", e.target.value)}
            className="w-full border px-3 py-2 rounded mb-3"
          />

          {/* Degree */}
          <input
            type="text"
            placeholder="Degree / Course"
            value={edu.degree}
            onChange={(e) => handleChange(index, "degree", e.target.value)}
            className="w-full border px-3 py-2 rounded mb-3"
          />

          {/* Duration + CGPA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Duration (e.g. 2021 – 2025)"
              value={edu.duration}
              onChange={(e) => handleChange(index, "duration", e.target.value)}
              className="border px-3 py-2 rounded"
            />

            <input
              type="text"
              placeholder="CGPA / Percentage"
              value={edu.cgpa}
              onChange={(e) => handleChange(index, "cgpa", e.target.value)}
              className="border px-3 py-2 rounded"
            />
          </div>

          {/* Remove Button */}
          {education.length > 1 && (
            <button
              onClick={() => removeEducation(index)}
              className="absolute top-3 right-3 bg-red-500 text-white text-xs px-3 py-1 rounded"
            >
              Remove
            </button>
          )}
        </div>
      ))}

      {/* Add Button */}
      <button onClick={addEducation} className="text-green-600 font-medium">
        + Add another education
      </button>
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
            onClick={nextInfo}
            className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            next
          </button>
        </div>
        <button
          type="submit"
          onClick={handlesubmit}
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EducationForm;
