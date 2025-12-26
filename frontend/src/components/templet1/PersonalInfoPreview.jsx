import React, { forwardRef, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
const PersonalInfoPreview = () => {
    const {formData, setFormData } = useContext(AuthContext);
  return (
    <>
      {/* NAME */}
      <h1 className="text-2xl font-bold uppercase text-center">
        {formData.name}
      </h1>

      {/* CONTACTS */}
      <p className="mt-1 text-center text-sm">
        {formData.email} | {formData.linkedin} |{" "}
        {formData.github} | {formData.phone}
      </p>

      {/* PROFILE SUMMARY */}
      <h2 className="font-bold mt-4">PROFILE SUMMARY</h2>
      <p className="mt-1">{formData.summary}</p>
    </>
  );
};

export default PersonalInfoPreview;
