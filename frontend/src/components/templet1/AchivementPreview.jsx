import React,{useContext} from "react";
import { AuthContext } from "../../contexts/AuthContext";
const AchivementPreview = () => {
  const { achievements, setAchievements } = useContext(AuthContext);
  return (
    <>
      {/* ACHIEVEMENTS */}
      <h2 className="font-bold mt-4">ACHIEVEMENTS</h2>
      <ul className="list-disc ml-5">
        {achievements.map((ach, i) => (
          <li key={i}>{ach}</li>
        ))}
      </ul>
    </>
  );
};

export default AchivementPreview;
