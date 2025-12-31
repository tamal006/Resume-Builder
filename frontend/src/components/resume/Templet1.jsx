import React, { forwardRef, useContext } from "react";
import PersonalInfoPreview from "../templet1/PersonalInfoPreview";
import SkillsPreview from "../templet1/SkillsPreview";
import ProjectPreview from "../templet1/ProjectPreview";
import AchivementPreview from "../templet1/AchivementPreview";
import { ExperiencePreview } from "../templet1/ExperiencePreview";
import EducationPreview from "../templet1/EducationPreview";
import SummaryPreview from "../templet1/SummaryPreview";

const Templet1 = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="bg-white"
      style={{
        width: "210mm",
        minHeight: "297mm",
        padding: "10mm",
      }}
    >
      <PersonalInfoPreview />
      <SummaryPreview/>
      <SkillsPreview />
      <ExperiencePreview />
      <ProjectPreview />
      <AchivementPreview />
      <EducationPreview />
    </div>
  );
});

export default Templet1;
