import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom";
const NavBar = () => {
    const navigate=useNavigate();
    const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      {/* Navbar */}
                <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
                    <Link to='/auth'>
                       <img src="vite.svg" alt="logo" />
                    </Link>

                    <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-800">
                        <a href="#" className="hover:text-indigo-600 transition">Home</a>
                        <a href="#features" className="hover:text-indigo-600 transition">Features</a>
                        <a href="#testimonials" className="hover:text-indigo-600 transition">Testimonials</a>
                        <a onClick={()=>{navigate('/contact')}} className="hover:text-indigo-600 transition">Contact</a>
                    </div>

                    <div className="flex gap-2">
                        <button onClick={()=>{navigate('/auth')}} className="hidden md:block px-6 py-2 bg-indigo-500 hover:bg-indigo-700 active:scale-95 transition-all rounded-full text-white">
                            login
                        </button>
                    
                    </div>

                    <button onClick={() => setMenuOpen(true)} className="md:hidden active:scale-90 transition" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" className="lucide lucide-menu" >
                            <path d="M4 5h16M4 12h16M4 19h16" />
                        </svg>
                    </button>
                </nav>

                {/* Mobile Menu */}
                <div className={`fixed inset-0 z-[100] bg-black/40 text-black backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`} >
                     <a href="#" onClick={() => setMenuOpen(false)} className="text-white">Home</a>
                        <a href="#features"  onClick={() => setMenuOpen(false)} className="text-white">Features</a>
                        <a href="#testimonials" onClick={() => setMenuOpen(false)} className="text-white">Testimonials</a>
                        <a onClick={()=>{navigate('/contact')}} className="text-white">Contact</a>
                    
                    <button onClick={() => setMenuOpen(false)} className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-indigo-600 hover:bg-indigo-700 transition text-white rounded-md flex" >
                        X
                    </button>
                </div>
</>
  )
}

export default NavBar