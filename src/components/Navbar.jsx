import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 🔥 HOME SCROLL
  const handleHome = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // 🔥 SECTION SCROLL
  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // 🔥 PROJECTS NAV
  const handleProjects = () => {
    navigate("/projects");
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <nav className="w-full bg-[#020617]/90 backdrop-blur-md px-4 sm:px-6 lg:px-20 py-3 flex justify-between items-center sticky top-0 z-50 border-b border-gray-800">

      {/* LOGO */}
      <button
        onClick={handleHome}
        className="text-lg sm:text-xl font-bold text-white"
      >
        Anjali <span className="text-orange-500">Sharma</span>
      </button>

      {/* MENU */}
      <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-300 font-medium text-sm lg:text-base">

        {/* HOME */}
        <li>
          <button
            onClick={handleHome}
            className="hover:text-orange-500 transition"
          >
            Home
          </button>
        </li>

        {/* ABOUT */}
        <li>
          <button
            onClick={() => handleScroll("about")}
            className="hover:text-orange-500 transition"
          >
            About
          </button>
        </li>

        {/* PROJECTS */}
        <li>
          <button
            onClick={handleProjects}
            className="hover:text-orange-500 transition"
          >
            Projects
          </button>
        </li>

        {/* CONTACT */}
        <li>
          <button
            onClick={() => handleScroll("contact")}
            className="hover:text-orange-500 transition"
          >
            Contact
          </button>
        </li>

      </ul>

      {/* RESUME BUTTON */}
      <a
        href="/anjali_resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 rounded-full font-semibold transition text-sm"
      >
        Resume
      </a>

    </nav>
  );
};

export default Navbar;