import ResumeCard from "../../components/dashboard/resumeCard";

const DashboardHome = ({resumes}) => {
  console.log("tkp",resumes)

  return (
    <div className="flex flex-col items-center mb-10">
      <h1 className="text-4xl font-bold mb-10 mt-5">My Resumes</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {resumes.map((resume,index) => (
          <ResumeCard key={index} resume={resume} />
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;
