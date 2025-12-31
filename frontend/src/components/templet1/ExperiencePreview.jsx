import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
export const ExperiencePreview = () => {
  const { experience, setExperience } = useContext(AuthContext);
  if (!experience || experience.length === 0) return null; 
  return (
      <>
        <h2 className="text-lg font-bold mt-2 border-b border-purple-900">
          EXPERIENCE
        </h2>

        {experience.map((exp, i) => (
          <div key={i}>
            <div className="flex justify-between">
              <p className="font-semibold">
                {exp.role} — {exp.company}
              </p>
              <p className="">{exp.duration}</p>
            </div>
            <ul className="list-disc ml-5 text-sm">
              {exp.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </>
  );
};
