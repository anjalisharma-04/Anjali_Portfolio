import React from "react";
import youtubeGif from "../assets/youtube.gif";

const allProjects = [
  {
    title: "YouTube Clone (MERN)",
    desc: "Full-stack video platform with authentication, uploads, likes, and search functionality.",
    img: youtubeGif, // ✅ FIXED
    live: "https://youtube-clone-pied-pi.vercel.app/",
  },
  {
    title: "E-commerce Website (React + Redux)",
    desc: "Responsive e-commerce platform with cart, product filtering, and API integration.",
    img: "https://images.unsplash.com/photo-1557821552-17105176677c",
    live: "https://e-commerce-frontend-seven-nu.vercel.app/",
  },
  {
    title: "SaaS Lead Management System",
    desc: "Lead tracking system with authentication, dashboard, and CRUD operations.",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    live: "https://saas-demo-pink.vercel.app/",
  },
  
  {
    title: "Weather App (JavaScript)",
    desc: "Weather forecasting app using API integration with real-time data.",
    img: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
    live: "https://weather-project-lmbc.vercel.app/",
  },
  
];

const Projects = () => {
  return (
    <section className="py-24 px-6 lg:px-20 bg-[#0f172a] text-gray-200 min-h-screen">

      <h2 className="text-4xl font-bold text-center mb-16">
        All <span className="text-orange-500">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {allProjects.map((project, index) => (
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

    </section>
  );
};

export default Projects;