import { useState, useContext,useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom'
import  {toast} from 'react-toastify'
import axios from "axios";
const SkillsForm = () => {
    const { id } = useParams();
    const [call,setCall]=useState(false);
   const navigate = useNavigate();
  const { skills,setSkills,resId,setresId } = useContext(AuthContext);

  const handleChange = (index, field, value) => {
    const updated = [...skills];
    updated[index][field] = value;
    setSkills(updated);
  };

  const addCategory = () => {
    setSkills([...skills, { category: "", items: "" }]);
  };

  const removeCategory = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };
 const handlesubmit = async (e) => {
    e.preventDefault();
     const token = localStorage.getItem("token");
     const bcurl=import.meta.env.VITE_API_URL
            const url = bcurl+"/api/resume/skills";

    const info={
      skills: skills,
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
        setCall(!call);
    console.log("User Input:", skills);
  };
 const nextInfo = (e) => {
    e.preventDefault();
    // API call here → send OTP

    // only pass email
    navigate(`/resume/${id}/experience`);
  };
  useEffect(() => {
  if (id) setresId(id);
}, [id,setresId])

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-6">
        Skills
      </h2>

      {skills.map((skill, index) => (
        <div
          key={index}
          className="border rounded  p-6 mb-4 relative"
        >
          {/* Category Name */}
          <input
            type="text"
            placeholder="Skill Category (e.g. Frontend)"
            value={skill.category}
            onChange={(e) =>
              handleChange(index, "category", e.target.value)
            }
            className="w-full border px-3 py-2 rounded mb-2"
          />

          {/* Skill Items */}
          <input
            type="text"
            placeholder="Skills (comma separated)"
            value={skill.items}
            onChange={(e) =>
              handleChange(index, "items", e.target.value)
            }
            className="w-full border px-3 py-2 rounded"
          />

          {/* Remove */}
          {skills.length > 1 && (
            <button
              onClick={() => removeCategory(index)}
              className="bg-red-600 text-white text-sm p-1 mt-2"
            >
              Remove
            </button>
          )}
        </div>
      ))}

      <button
        onClick={addCategory}
        className="text-green-600 font-medium mb-4"
      >
        + Add another skill category
      </button>

       {/* Submit */}
      <div className="flex flex-col">
        <div className="flex  gap-8">
        <button
            onClick={() => navigate(-1)}
            className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            ← Back
          </button>
        <button
          onClick={nextInfo}
          className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          next
        </button>
        </div>
        <button
          type="submit"
          onClick={handlesubmit}
          className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default SkillsForm;
