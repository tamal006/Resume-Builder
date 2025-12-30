import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const { dashboardMenu, setDashboardMenu } = useContext(AuthContext);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-70 min-h-screen bg-white  p-6 flex-col">
        <h2 className="text-2xl font-bold text-blue-600 mb-10">
          Resume Builder
        </h2>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => setDashboardMenu("myResume")}
            className={`p-3 rounded-xl text-left transition ${
              dashboardMenu === "myResume"
                ? "bg-blue-100 text-blue-700 font-semibold"
                : "text-gray-600 hover:bg-blue-50"
            }`}
          >
            📄 My Resumes
          </button>
          <button
            onClick={() => setDashboardMenu("createResume")}
            className={`p-3 rounded-xl text-left transition ${
              dashboardMenu === "createResume"
                ? "bg-blue-100 text-blue-700 font-semibold"
                : "text-gray-600 hover:bg-blue-50"
            }`}
          >
            ➕ Create Resume
          </button>
          <button
            onClick={() => navigate("/")}
            className="p-3 rounded-xl text-left transition text-gray-600 hover:bg-blue-50"
          >
            🏠 Home
          </button>
        </div>
      </aside>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow flex justify-around py-3 z-50">
        <MobileBtn
          active={dashboardMenu === "myResume"}
          onClick={() => setDashboardMenu("myResume")}
          label="Resumes"
        />
        <MobileBtn
          active={dashboardMenu === "createResume"}
          onClick={() => setDashboardMenu("createResume")}
          label="Create"
        />
        <MobileBtn onClick={() => navigate("/")} label="Home" />
      </div>
    </>
  );
};

export default Sidebar;

const NavButton = ({ active, onClick, text }) => (
  <button
    onClick={onClick}
    className={`p-3 rounded-xl text-left transition ${
      active
        ? "bg-blue-100 text-blue-700 font-semibold"
        : "text-gray-600 hover:bg-blue-50"
    }`}
  >
    {text}
  </button>
);

const MobileBtn = ({ active, onClick, label }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center text-sm ${
      active ? "text-blue-600 font-semibold" : "text-gray-500"
    }`}
  >
    {label}
  </button>
);
