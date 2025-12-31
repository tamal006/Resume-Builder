import React, { forwardRef, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
const PersonalInfoPreview = () => {
  const { formData, setFormData } = useContext(AuthContext);
   if (!formData || formData.length === 0) return null;
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        {/* NAME */}
        <h1 className="text-4xl font-bold text-purple-700 uppercase text-center">
          {formData.name}
        </h1>
        
        {/* CONTACTS */}
        {/* <p className="mt-1 text-center text-sm">
        {formData.email} | {formData.linkedin} |{" "}
        {formData.github} | {formData.phone}
      </p> */}
        <div className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-2 max-w-150 mx-auto text-center">

          <a
            href={`mailto:${formData.email}`}
            className="text-sm hover:text-purple-700 flex items-center gap-1"
          >
            <MdEmail />
            {formData.email}
          </a>
          <a
            type="url"
            href={
              formData.linkedin?.startsWith("http")
                ? formData.linkedin
                : "https://" + formData.linkedin
            }
            target="_blank"
            className="text-sm hover:text-purple-700 flex items-center gap-1"
          >
            <FaLinkedin />
            {formData.linkedin?.slice(16)}
          </a>

          <a
            href={
              formData.github?.includes("http")
                ? formData.github
                : "https://" + formData.github
            }
            target="_blank"
            className="text-sm hover:text-purple-700 flex items-center gap-1"
          >
            <FaGithub />
            {formData.github?.slice(11)}
          </a>
          <a
            href={`tel:${formData.phone}`}
            target="_blank"
            className="text-sm hover:text-purple-700 flex items-center gap-1 "
          >
            <FaPhone />
            {formData.phone}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoPreview;
