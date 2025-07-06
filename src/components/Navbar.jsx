import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { Menu, X } from "lucide-react"; // optional icons package (install with `npm i lucide-react`)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="bg-orange-500 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/home" className="text-xl font-bold tracking-wider">
          MessMate
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/home" className="hover:text-orange-100">Home</Link>
          <Link to="/suggestions" className="hover:text-orange-100">Suggestions</Link>
          <Link to="/feedback" className="hover:text-orange-100">Feedback</Link>
          <button
            onClick={handleLogout}
            className="bg-white text-orange-500 px-4 py-1 rounded hover:bg-orange-100 transition"
          >
            Logout
          </button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 text-sm bg-orange-400">
          <Link to="/home" className="block hover:text-orange-100">Home</Link>
          <Link to="/suggestions" className="block hover:text-orange-100">Suggestions</Link>
          <Link to="/feedback" className="block hover:text-orange-100">Feedback</Link>
          <button
            onClick={handleLogout}
            className="w-full text-left bg-white text-orange-500 px-3 py-1 rounded hover:bg-orange-100 transition"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
