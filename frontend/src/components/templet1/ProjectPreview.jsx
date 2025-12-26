import React,{useContext} from "react";
import { AuthContext } from "../../contexts/AuthContext";
const ProjectPreview = () => {
  const { projects, setProjects } = useContext(AuthContext);
  return (
    <>
      {/* PROJECTS */}
      <h2 className="font-bold mt-4">PROJECTS</h2>
      {projects.map((project, index) => (
        <div key={index} className="mt-2">
          <p className="font-semibold">{project.title}</p>
          <ul className="list-disc ml-5">
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
