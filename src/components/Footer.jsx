import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHome = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#020617] text-gray-300 px-4 sm:px-6 lg:px-20 pt-10 pb-4">

      {/* 🔥 2 COLUMN LAYOUT */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">

        {/* LEFT */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold">
            Anjali <span className="text-orange-500">Sharma</span>
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Passionate Full Stack Developer specializing in MERN stack.
            I build fast, responsive, and scalable web applications.
          </p>
        </div>

        {/* RIGHT (MERGED COLUMN) */}
        <div className="grid grid-cols-2 gap-6">

          {/* QUICK LINKS */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-orange-500">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm text-gray-400">

              <li>
                <button onClick={handleHome} className="hover:text-orange-500">
                  Home
                </button>
              </li>

              <li>
                <button onClick={() => handleScroll("about")} className="hover:text-orange-500">
                  About
                </button>
              </li>

              <li>
                <Link to="/projects" className="hover:text-orange-500">
                  Projects
                </Link>
              </li>

              <li>
                <button onClick={() => handleScroll("contact")} className="hover:text-orange-500">
                  Contact
                </button>
              </li>

              <li>
                <a
                  href="/anjali_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500"
                >
                  Resume
                </a>
              </li>

            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-orange-500">
              Contact Info
            </h3>

            <div className="space-y-2 text-sm text-gray-400">

              <div className="flex items-center gap-2">
                <FaEnvelope className="text-orange-500" />
                <span className="break-all">
                  anjalisharma14040@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-2">
                <FaPhone className="text-orange-500" />
                <span>+91 6387714725</span>
              </div>

            </div>

            {/* SOCIAL */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/anjalisharma-04"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0f172a] p-2 rounded-full border border-gray-800 hover:border-orange-500"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/anjalisharma0414/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0f172a] p-2 rounded-full border border-gray-800 hover:border-orange-500"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* 🔥 BOTTOM */}
      <div className="mt-8 border-t border-gray-800 pt-3 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Anjali Sharma | All Rights Reserved
      </div>

    </footer>
  );
};

export default Footer;