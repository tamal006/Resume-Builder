import React,{useContext} from "react";
import { AuthContext } from "../../contexts/AuthContext";
export const ExperiencePreview = () => {
  const { experience, setExperience } = useContext(AuthContext);
  return (
    <>
      <h2 className="font-bold mt-4">EXPERIENCE</h2>

      {experience.map((exp, i) => (
        <div key={i} className="mt-2">
          <p className="font-semibold">
            {exp.role} — {exp.company}
          </p>
          <p className="text-sm">{exp.duration}</p>
          <ul className="list-disc ml-5">
            {exp.points.map((point, j) => (
              <li key={j}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};
