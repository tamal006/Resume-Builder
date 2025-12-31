import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
const EducationPreview = () => {
  const { education } = useContext(AuthContext);
   if (!education || education.length === 0) return null;
  return (
    <>
      {/* EDUCATION */}
      <h2 className="text-lg font-bold mt-2 border-b border-purple-900">
        EDUCATION
      </h2>
      {education.map((edu, index) => (
        <div key={index} className="flex justify-between">
          <div>
            <p className="font-semibold">{edu.institute}</p>
            <p className="text-sm">{edu.degree}</p>
            <p className="text-sm">cgpa - {edu.cgpa}</p>
          </div>

          <p>{edu.duration}</p>
        </div>
      ))}
    </>
  );
};

export default EducationPreview;
