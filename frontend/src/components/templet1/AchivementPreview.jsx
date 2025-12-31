import React,{useContext} from "react";
import { AuthContext } from "../../contexts/AuthContext";
const AchivementPreview = () => {
  const { achievements, setAchievements } = useContext(AuthContext);
    if (!achievements || achievements.length === 0) return null;
  return (
    <>
      {/* ACHIEVEMENTS */}
      <h2 className="text-lg font-bold mt-2  border-b border-purple-900">ACHIEVEMENTS</h2>
      <ul className="list-disc ml-5 text-sm">
        {achievements.map((ach, i) => (
          <li key={i}>{ach}</li>
        ))}
      </ul>
    </>
  );
};

export default AchivementPreview;
