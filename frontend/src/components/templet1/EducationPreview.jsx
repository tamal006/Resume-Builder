import React,{useContext} from "react";
import { AuthContext } from "../../contexts/AuthContext";
const EducationPreview = () => {
      const {education } = useContext(AuthContext);
  return (
    <>
    {/* EDUCATION */}
      <h2 className="font-bold mt-4">EDUCATION</h2>
      {education.map((edu, index) => (
        <div key={index}>
      <p  className="font-semibold">{edu.institute}</p>
      <p>{edu.degree}</p>
      <p>
        {edu.duration} | CGPA - {edu.cgpa}
      </p>
      </div>
      ))}
      </>
  )
}

export default EducationPreview