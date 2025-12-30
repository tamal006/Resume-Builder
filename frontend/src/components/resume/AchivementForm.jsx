import React, { useContext, useRef, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
const AchivementForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { achievements, setAchievements, res, setresId } =
    useContext(AuthContext);

  const inputRefs = useRef([]);

  const handlePointChange = (index, value) => {
    const updated = [...achievements];
    updated[index] = value;
    setAchievements(updated);
  };

  const addPoint = () => {
    setAchievements((prev) => [...prev, ""]);
  };

  const removePoint = (index) => {
    setAchievements(achievements.filter((_, i) => i !== index));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const bcurl = import.meta.env.VITE_API_URL;
    const url = bcurl + "/api/resume/achievements";
    const info = {
      achievements: achievements,
      token: token,
      resumeId: id,
    };
    const response = await axios.post(url, info);
    if (response.data.success == true) {
      toast.success("Data saved successfully");
    } else {
      toast.error("Data not saved");
    }

    console.log("Projects:", info);
  };
  const nextInfo = (e) => {
    e.preventDefault();
    // API call here → send OTP

    // only pass email
    navigate(`/resume/${id}/education`);
  };

  // 🔥 Auto focus last input when a new point is added
  useEffect(() => {
    if (inputRefs.current.length > 0) {
      if (id) setresId(id);
      inputRefs.current[inputRefs.current.length - 1]?.focus();
    }
  }, [id, setresId, achievements.length]);

  return (
    <div className="max-w-4xl mt-20 mx-auto bg-white p-6 md:p-8 shadow rounded-lg mb-10">
      <h2 className="text-2xl font-bold mb-6">Achievements</h2>

      {achievements.map((point, pointIndex) => (
        <div key={pointIndex} className="flex gap-4 pb-5">
          <input
            ref={(el) => (inputRefs.current[pointIndex] = el)}
            type="text"
            placeholder="Achievement point"
            value={point}
            onChange={(e) => handlePointChange(pointIndex, e.target.value)}
            className="flex-1 border px-3 py-2 rounded"
          />

          {achievements.length > 1 && (
            <button
              onClick={() => removePoint(pointIndex)}
              className="bg-red-500 text-white px-3 rounded"
            >
              ✕
            </button>
          )}
        </div>
      ))}

      <button onClick={addPoint} className="text-blue-600 text-sm mt-3">
        + Add point
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
          onClick={handleSubmit}
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AchivementForm;
