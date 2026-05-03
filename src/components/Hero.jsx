import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-20 bg-[#0f172a] overflow-hidden">

      {/* 🔥 BACKGROUND ANIMATION (responsive) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 sm:opacity-20">
        <div className="w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] border border-cyan-400 rounded-full animate-spin-slow"></div>
      </div>

      {/* 🔥 MAIN CONTAINER */}
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-10 lg:gap-12 items-center z-10">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Hi, I’m <br />
            <span className="text-orange-500">Anjali Sharma</span>
          </h1>

          <h2 className="mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl text-gray-300 font-semibold">
            Full Stack Developer (MERN)
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-400 max-w-md mx-auto lg:mx-0 leading-relaxed">
            I build modern, scalable web applications using React, Node.js, 
            Express, and MongoDB. Passionate about clean UI and smooth user experiences.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">

            <a
              href="/anjali_resume.pdf"
              target="_blank"
              className="bg-orange-500 hover:bg-orange-600 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-white text-sm sm:text-base font-semibold transition"
            >
              Download Resume
            </a>

            <button
              onClick={() => {
                navigate("/projects");
                window.scrollTo({ top: 0, behavior: "auto" });
              }}
              className="border border-orange-500 text-orange-500 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-orange-500 hover:text-black transition"
            >
              View Projects
            </button>

          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center mt-10 lg:mt-0">

          <div className="relative">

            {/* GLOW */}
            <div className="absolute inset-0 bg-cyan-500 blur-2xl sm:blur-3xl opacity-20 rounded-full"></div>

            {/* IMAGE */}
            <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 border-4 border-cyan-400 rounded-full overflow-hidden relative">

              <img
                src="src/public/AJ.jpeg"
                alt="hero"
                className="w-full h-full object-cover"
              />

            </div>

          </div>

        </div>

      </div>

      {/* 🔥 ANIMATION */}
      <style>
        {`
          .animate-spin-slow {
            animation: spin 25s linear infinite;
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>

    </section>
  );
};

export default Hero;