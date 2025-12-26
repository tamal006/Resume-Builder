import React, { forwardRef, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
const SkillsPreview = () => {
    const {skills,setSkills} = useContext(AuthContext);
  return (
    <>
      {/* SKILLS */}
      <h2 className="font-bold mt-4">SKILLS</h2>
      {skills.map((skill, index) =>(
        <p key={index}>
        <strong>{skill.category}:</strong> {skill.items}
      </p>
      ))}
    </>
  );
};

export default SkillsPreview;
