import ResumeCard from "../../components/dashboard/resumeCard";

const DashboardHome = ({resumes}) => {
  console.log("tkp",resumes)

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">My Resumes</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {resumes.map((resume,index) => (
          <ResumeCard key={index} resume={resume} />
        ))}
      </div>
    </>
  );
};

export default DashboardHome;
