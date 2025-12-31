import { Outlet, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import Templet1 from "../../components/resume/Templet1";
import { useEffect } from "react";

const CreateResumeLayout = () => {
  const navigate = useNavigate();
  const resumeRef = useRef();
  const [preview, setPreview] = useState(false);

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: "My_Resume",
  });
    useEffect(() => {
  
  }, []);
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Top Bar */}
      <div className="sticky top-0 z-40 bg-white border-b px-4 py-3 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Resume Editor</h2>

        <div className="flex gap-2">
          <button
            onClick={() => {
              navigate("/dashboard");
            }}
            className=" bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
          >
            Dashboard
          </button>
          <button
            onClick={handlePrint}
            className="hidden md:block bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
          >
            Download PDF
          </button>
        </div>
      </div>

      {/* Editor Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Form Section */}
        <div
          className={`w-full md:w-1/2 overflow-y-auto bg-white flex flex-col items-center  p-4 ${
            preview ? "hidden md:block" : "block"
          }`}
        >
          <Outlet />
        </div>

        {/* Resume Preview */}
        <div
          className={`w-full md:w-1/2 overflow-y-auto bg-gray-50  ${
            preview ? "block" : "hidden md:block"
          }`}
        >
          <div className="w-full flex justify-center overflow-hidden bg-white shadow-lg rounded-lg  relative w-[794px] md:w-[794px]">
            <div className="resume-preview">
              <Templet1 ref={resumeRef} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t px-4 py-3 flex gap-3">
        <button
          onClick={() => setPreview(!preview)}
          className="flex-1 bg-blue-500 text-white py-3 rounded-lg font-semibold"
        >
          {preview ? "Edit Resume" : "Preview"}
        </button>

        <button
          onClick={handlePrint}
          className="flex-1 bg-blue-500 text-white py-3 rounded-lg font-semibold"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default CreateResumeLayout;
