import { useRef, useEffect,useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom'
import { toast } from "react-toastify";
import axios from "axios";
const ExperienceForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { experience, setExperience,resId,setresId } = useContext(AuthContext);
  const roleRefs = useRef([]);
  const pointRefs = useRef({});

  const handleChange = (index, field, value) => {
    const updated = [...experience];
    updated[index][field] = value;
    setExperience(updated);
  };

  const handlePointChange = (expIndex, pointIndex, value) => {
    const updated = [...experience];
    updated[expIndex].points[pointIndex] = value;
    setExperience(updated);
  };

  const addExperience = () => {
    setExperience((prev) => [
      ...prev,
      { company: "", role: "", duration: "", points: [""] },
    ]);
  };

  const removeExperience = (index) => {
    setExperience(experience.filter((_, i) => i !== index));
  };

  const addPoint = (expIndex) => {
    const updated = [...experience];
    updated[expIndex].points.push("");
    setExperience(updated);
  };

  const removePoint = (expIndex, pointIndex) => {
    const updated = [...experience];
    updated[expIndex].points.splice(pointIndex, 1);
    setExperience(updated);
  };
const handlesubmit =async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
      const bcurl=import.meta.env.VITE_API_URL
            const url = bcurl+"/api/resume/experience";
        const info={
          experience: experience,
          token: token,
          resumeId:id,
        }
            const response = await axios.post(url,info);
            if(response.data.success==true){
                   toast.success("Data saved successfully");
                  }
                  else{
                    toast.error("Data not saved");
                  }
    console.log("User Inputff:", experience,info);
  };
 const nextInfo = (e) => {
    e.preventDefault();
    // API call here → send OTP

    // only pass email
    navigate(`/resume/${id}/project`);
  };
  // 🔥 Auto-focus newly added experience role
  useEffect(() => {
    if (id) setresId(id);
    roleRefs.current[experience.length - 1]?.focus();
  }, [id,setresId,experience.length]);

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 md:p-8 shadow rounded-lg mb-10">
      <h2 className="text-2xl font-bold mb-6">Experience</h2>

      {experience.map((exp, expIndex) => (
        <div
          key={expIndex}
          className="border rounded-lg p-6 mb-6 relative"
        >
          {/* Company */}
          <input
            type="text"
            placeholder="Company Name"
            value={exp.company}
            onChange={(e) =>
              handleChange(expIndex, "company", e.target.value)
            }
            className="w-full border px-3 py-2 rounded mb-3"
          />

          {/* Role */}
          <input
            ref={(el) => (roleRefs.current[expIndex] = el)}
            type="text"
            placeholder="Role / Position"
            value={exp.role}
            onChange={(e) =>
              handleChange(expIndex, "role", e.target.value)
            }
            className="w-full border px-3 py-2 rounded mb-3"
          />

          {/* Duration */}
          <input
            type="text"
            placeholder="Duration (e.g. Jan 2023 – Present)"
            value={exp.duration}
            onChange={(e) =>
              handleChange(expIndex, "duration", e.target.value)
            }
            className="w-full border px-3 py-2 rounded mb-4"
          />

          {/* Experience Points */}
          <div className="space-y-2">
            {exp.points.map((point, pointIndex) => (
              <div key={pointIndex} className="flex gap-2">
                <input
                  ref={(el) => {
                    if (!pointRefs.current[expIndex]) {
                      pointRefs.current[expIndex] = [];
                    }
                    pointRefs.current[expIndex][pointIndex] = el;
                  }}
                  type="text"
                  placeholder="Responsibility / Achievement"
                  value={point}
                  onChange={(e) =>
                    handlePointChange(expIndex, pointIndex, e.target.value)
                  }
                  className="flex-1 border px-3 py-2 rounded"
                />

                {exp.points.length > 1 && (
                  <button
                    onClick={() =>
                      removePoint(expIndex, pointIndex)
                    }
                    className="bg-red-500 text-white px-3 rounded"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Add Point */}
          <button
            onClick={() => addPoint(expIndex)}
            className="text-blue-600 text-sm mt-3"
          >
            + Add point
          </button>

          {/* Remove Experience */}
          {experience.length > 1 && (
            <button
              onClick={() => removeExperience(expIndex)}
              className="absolute top-3 right-3 bg-red-600 text-white text-xs px-3 py-1 rounded"
            >
              Remove Experience
            </button>
          )}
        </div>
      ))}

      {/* Add Experience */}
      <button
        onClick={addExperience}
        className="text-green-600 font-medium"
      >
        + Add another experience
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

export default ExperienceForm;
