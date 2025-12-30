import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
const ProjectsForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projects, setProjects, resId, setresId } = useContext(AuthContext);

  const handleProjectChange = (index, field, value) => {
    const updated = [...projects];
    updated[index][field] = value;
    setProjects(updated);
  };

  const handlePointChange = (pIndex, pointIndex, value) => {
    const updated = [...projects];
    updated[pIndex].points[pointIndex] = value;
    setProjects(updated);
  };

  const addProject = () => {
    setProjects([...projects, { title: "", points: [""] }]);
  };

  const removeProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const addPoint = (index) => {
    const updated = [...projects];
    updated[index].points.push("");
    setProjects(updated);
  };

  const removePoint = (pIndex, pointIndex) => {
    const updated = [...projects];
    updated[pIndex].points.splice(pointIndex, 1);
    setProjects(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const bcurl = import.meta.env.VITE_API_URL;
    const url = bcurl + "/api/resume/project";
    const info = {
      projects: projects,
      token: token,
      resumeId: id,
    };
    const response = await axios.post(url, info);
    if (response.data.success == true) {
      toast.success("Data saved successfully");
    } else {
      toast.error("Data not saved");
    }
    console.log("Projects:", projects, info);
  };
  const nextInfo = (e) => {
    e.preventDefault();
    // API call here → send OTP

    // only pass email
    navigate(`/resume/${id}/achivement`);
  };
  useEffect(() => {
    if (id) setresId(id);
  }, [id, setresId]);
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 md:p-8 shadow rounded-lg mb-10">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>

      {projects.map((project, pIndex) => (
        <div key={pIndex} className="border rounded-lg p-6 mb-6 relative">
          {/* Project Title */}
          <input
            type="text"
            placeholder="Project Title (e.g. NurseConnect - Healthcare Platform)"
            value={project.title}
            onChange={(e) =>
              handleProjectChange(pIndex, "title", e.target.value)
            }
            className="w-full border px-3 py-2 rounded mb-4 font-medium"
          />

          {/* Points */}
          <div className="space-y-2">
            {project.points.map((point, pointIndex) => (
              <div key={pointIndex} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Project description point"
                  value={point}
                  onChange={(e) =>
                    handlePointChange(pIndex, pointIndex, e.target.value)
                  }
                  className="flex-1 border px-3 py-2 rounded"
                />

                {project.points.length > 1 && (
                  <button
                    onClick={() => removePoint(pIndex, pointIndex)}
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
            onClick={() => addPoint(pIndex)}
            className="text-blue-600 text-sm mt-3"
          >
            + Add point
          </button>

          {/* Remove Project */}
          {projects.length > 1 && (
            <button
              onClick={() => removeProject(pIndex)}
              className="absolute top-3 right-3 bg-red-600 text-white text-xs px-3 py-1 rounded"
            >
              Remove Project
            </button>
          )}
        </div>
      ))}

      {/* Add Project */}
      <button onClick={addProject} className="text-green-600 font-medium mb-4">
        + Add another project
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

export default ProjectsForm;
