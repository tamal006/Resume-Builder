import React,{useContext} from "react";
import { AuthContext } from "../../contexts/AuthContext";
const ProjectPreview = () => {
  const { projects, setProjects } = useContext(AuthContext);
   if (!projects || projects.length === 0) return null;
  return (
    <>
      {/* PROJECTS */}
      <h2 className="text-lg font-bold mt-2 border-b border-purple-900">PROJECTS</h2>
      {projects.map((project, index) => (
        <div key={index} >
          <p className="font-semibold text-sm">{project.title}</p>
          <ul className="list-disc ml-5 text-xs">
            {project.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default ProjectPreview;
