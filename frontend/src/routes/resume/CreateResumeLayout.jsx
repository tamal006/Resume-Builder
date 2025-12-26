import { Outlet,useNavigate } from "react-router-dom";
import { useRef,useState,useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import Templet1 from "../../components/resume/Templet1";

const CreateResumeLayout = () => {
  const navigate=useNavigate();
  const resumeRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    content: () => resumeRef.current,
    documentTitle: "My_Resume",
  });

useEffect(() => {
 console.log("refrace");
}, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* FORM SIDE */}
      <div className="w-full  flex items-start justify-start md:w-1/2  border-2 border-black">
        <Outlet />
      </div>

      {/* PREVIEW SIDE */}
      <div className="w-full md:w-1/2 border-2 border-black flex flex-col items-center p-4 gap-4">
      <div className="flex  items-center gap-10 mt-5">
      <button
          onClick={handlePrint}
          className="bg-green-600 text-white px-6 py-2 rounded"
        >
          Download PDF
        </button>
        <button
          onClick={()=>{navigate('/dashboard')}}
          className="bg-green-600 text-white px-6 py-2 rounded"
        >
          go to dashboard
        </button>
        </div>
        <Templet1 ref={resumeRef} />
      </div>
    </div>
  );
};

export default CreateResumeLayout;
