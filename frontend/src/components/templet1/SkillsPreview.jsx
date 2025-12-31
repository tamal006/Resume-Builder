import React, { forwardRef, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
const SkillsPreview = () => {
    const {skills,setSkills} = useContext(AuthContext);
     if (!skills || skills.length === 0) return null;
  return (
    <>
      {/* SKILLS */}
      <h2 className="text-lg font-bold mt-2 border-b border-purple-900">SKILLS</h2>
      {skills.map((skill, index) =>(
        <p key={index} className="text-sm">
        <strong>{skill.category}:</strong> {skill.items}
      </p>
      ))}
    </>
  );
};

export default SkillsPreview;
