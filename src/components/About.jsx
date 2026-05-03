import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 🔥 scroll function (unchanged)
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

  return (
    <section id="about" className="bg-[#0f172a] py-24 px-6 flex justify-center">

      {/* MAIN CONTAINER */}
      <div className="max-w-6xl w-full bg-[#020617] rounded-3xl p-10 md:p-16 shadow-[0_0_40px_rgba(255,115,0,0.15)]">

        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* LEFT IMAGE */}
          <div className="flex-1 flex justify-center">
            <div className="relative">

              <div className="bg-[#0f172a] border border-gray-700 rounded-2xl p-4 shadow-lg">
                <img
                  src="src/assets/anjali_profile.jpg"
                  alt="Anjali Sharma"
                  className="w-80 rounded-xl"
                />
              </div>

              {/* EXPERIENCE TAG */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-xl shadow-lg text-sm font-semibold">
                MERN Developer
              </div>

            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 space-y-6">

            <h2 className="text-4xl font-bold text-white">
              About <span className="text-orange-500">Me</span>
            </h2>

            <h3 className="text-lg text-gray-400 font-semibold">
              Full Stack Developer (MERN Stack)
            </h3>

            <p className="text-gray-400 leading-relaxed">
              I am a passionate Full Stack Developer with expertise in building 
              modern web applications using React, Node.js, Express, and MongoDB. 
              I focus on creating responsive user interfaces, scalable backend APIs, 
              and seamless user experiences.
            </p>

            {/* GRID */}
            <div className="grid sm:grid-cols-2 gap-6 text-sm">

              <div>
                <h4 className="text-orange-500 font-semibold mb-1">Frontend</h4>
                <p className="text-gray-400">
                  React.js, JavaScript, Tailwind CSS, HTML, CSS
                </p>
              </div>

              <div>
                <h4 className="text-orange-500 font-semibold mb-1">Backend</h4>
                <p className="text-gray-400">
                  Node.js, Express.js, REST APIs
                </p>
              </div>

              <div>
                <h4 className="text-orange-500 font-semibold mb-1">Database</h4>
                <p className="text-gray-400">
                  MongoDB, CRUD Operations
                </p>
              </div>

              <div>
                <h4 className="text-orange-500 font-semibold mb-1">Soft Skills</h4>
                <p className="text-gray-400">
                  Problem Solving, Team Work, Communication
                </p>
              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex gap-6 pt-6">

              {/* 🔥 FINAL FIX */}
              <button
                onClick={() => {
                  navigate("/projects");
                  window.scrollTo({ top: 0, behavior: "auto" });
                }}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition"
              >
                View Projects →
              </button>

              {/* 🔥 FINAL FIX */}
              <button
                onClick={() => handleScroll("contact")}
                className="border border-orange-500 text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-black transition"
              >
                Contact Me
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;