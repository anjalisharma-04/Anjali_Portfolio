import React from "react";
import {
  Code,
  Server,
  Database,
  Globe,
  Shield,
  Layers,
} from "lucide-react";

const services = [
  {
    icon: <Code size={26} />,
    title: "Frontend Development",
    desc: "Building responsive and modern UI using React, Tailwind CSS, and JavaScript.",
  },
  {
    icon: <Server size={26} />,
    title: "Backend Development",
    desc: "Creating scalable REST APIs using Node.js and Express with clean architecture.",
    highlight: true,
  },
  {
    icon: <Database size={26} />,
    title: "Database Management",
    desc: "Designing and managing MongoDB databases with optimized queries and schema design.",
  },
  {
    icon: <Globe size={26} />,
    title: "Full Stack Web Apps",
    desc: "Developing complete MERN stack applications with authentication and dynamic features.",
  },
  {
    icon: <Shield size={26} />,
    title: "Authentication & Security",
    desc: "Implementing JWT authentication, protected routes, and secure backend systems.",
  },
  {
    icon: <Layers size={26} />,
    title: "API Integration",
    desc: "Integrating third-party APIs and handling real-time data efficiently.",
  },
];

const Services = () => {
  return (
    <section className="py-24 px-6 lg:px-20 bg-[#0f172a] text-gray-200">

      {/* HEADING */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          My <span className="text-orange-500">Services</span>
        </h2>
        <p className="text-gray-400 mt-3">
          Delivering scalable full-stack web solutions
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#020617] p-8 rounded-3xl border border-gray-800 hover:border-orange-500 hover:shadow-xl transition duration-300"
          >

            {/* ICON */}
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-xl mb-6 
              ${
                service.highlight
                  ? "bg-orange-500 text-white"
                  : "bg-orange-500/20 text-orange-400"
              }`}
            >
              {service.icon}
            </div>

            {/* TITLE */}
            <h3
              className={`text-lg font-semibold mb-2 ${
                service.highlight ? "text-orange-500" : "text-white"
              }`}
            >
              {service.title}
            </h3>

            {/* DESC */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {service.desc}
            </p>

          </div>
        ))}

      </div>

      {/* BUTTONS */}
      <div className="flex justify-center gap-6 mt-16">

        <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
          View All Projects →
        </button>

        <button className="border border-orange-400 text-orange-400 px-8 py-3 rounded-full font-semibold hover:bg-orange-400 hover:text-black transition">
          Get in Touch
        </button>

      </div>

    </section>
  );
};

export default Services;