import React from "react";
import { Link } from "react-router-dom";
import youtubeGif from "../assets/youtube.gif";

const projects = [
  {
    title: "YouTube Clone (MERN)",
    desc: "Built a full-stack video platform with authentication, video uploads, subscriptions, and search functionality using MERN stack.",
    img: youtubeGif, // ✅ FIXED
    live: "https://youtube-clone-pied-pi.vercel.app/",
  },
  {
    title: "Shoppy Global – E-commerce",
    desc: "Developed a responsive e-commerce app with product API integration and Redux-based cart system.",
    img: "https://images.unsplash.com/photo-1557821552-17105176677c",
    live: "https://e-commerce-frontend-seven-nu.vercel.app/",
  },
  {
    title: "SaaS Lead Management System",
    desc: "Built a SaaS platform to manage business leads with JWT authentication and real-time tracking.",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    live: "https://saas-demo-pink.vercel.app/",
  },
];

const LatestProjects = () => {
  return (
    <section className="py-24 px-6 lg:px-20 bg-[#0f172a] text-gray-200">

      <h2 className="text-4xl font-bold text-center mb-16">
        Latest <span className="text-orange-500">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#020617] border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-orange-500 transition duration-300"
          >

            <div className="overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="h-56 w-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-6">

              <h3 className="text-lg font-bold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.desc}
              </p>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 font-semibold text-sm hover:underline"
              >
                Live Demo →
              </a>

            </div>

          </div>
        ))}

      </div>

      {/* ✅ ROUTER FIX */}
      <div className="flex justify-center mt-16">
        <Link
          to="/projects"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition"
        >
          View All Projects →
        </Link>
      </div>

    </section>
  );
};

export default LatestProjects;