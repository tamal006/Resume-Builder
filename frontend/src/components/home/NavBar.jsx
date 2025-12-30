import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      {/* Navbar */}
      <nav className=" flex items-center justify-between w-full py-5 px-6 md:px-16 lg:px-24 xl:px-40 text-sm ">
        <Link to="/auth">
          <img src="logo.svg" className="w-15 h-15" alt="logo" />
        </Link>

        <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-800">
          <a href="#" className="hover:text-indigo-600 transition">
            Home
          </a>
          <a href="#features" className="hover:text-indigo-600 transition">
            Features
          </a>
          <a href="#testimonials" className="hover:text-indigo-600 transition">
            Testimonials
          </a>
          <a
            onClick={() => {
              navigate("/contact");
            }}
            className="hover:text-indigo-600 transition"
          >
            Contact
          </a>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => {
              navigate("/auth");
            }}
            className="hidden md:block px-6 py-2 bg-indigo-500 hover:bg-indigo-700 active:scale-95 transition-all rounded-full text-white"
          >
            login
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden active:scale-90 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="lucide lucide-menu"
          >
            <path d="M4 5h16M4 12h16M4 19h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[10] bg-blue-950/40 backdrop-blur-md flex flex-col items-center justify-center md:hidden transition-transform duration-200  ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top Bar */}
        
          <h2 className="text-2xl font-bold text-white pt-10">Resume Builder</h2>
         


        {/* Menu Links */}
        <div className="flex flex-col items-center justify-center flex-1 gap-6 text-lg ">
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="text-white font-medium hover:text-blue-400 transition"
          >
            Home
          </a>

          <a
            href="#features"
            onClick={() => setMenuOpen(false)}
            className="text-white font-medium hover:text-blue-400 transition"
          >
            Features
          </a>

          <a
            href="#testimonials"
            onClick={() => setMenuOpen(false)}
            className="text-white font-medium hover:text-blue-400 transition"
          >
            Testimonials
          </a>
          
          <button
            onClick={() => {
              setMenuOpen(false);
              navigate("/contact");
            }}
            className="text-white font-medium hover:text-blue-400 transition"
          >
            Contact
          </button>
           <button
            onClick={() => {
              navigate("/auth");
            }}
            className="text-white font-medium hover:text-blue-400 transition"
          >
            login
          </button>
           <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl hover:text-blue-300"
          >
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
