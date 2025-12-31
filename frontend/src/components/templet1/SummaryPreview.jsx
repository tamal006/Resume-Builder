import React, { forwardRef, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
const SummaryPreview = () => {
  const { formData, setFormData } = useContext(AuthContext);
  return (
    <div className=" flex flex-col  justify-center">
      {/* PROFILE SUMMARY */}
      <h2 className="text-lg font-bold mt-2 border-b border-purple-900">
        PROFILE SUMMARY
      </h2>
      <p className=" text-xs  text-gray-800 text-justify max-w-full">
        {formData.summary}
      </p>
    </div>
  );
};

export default SummaryPreview;
