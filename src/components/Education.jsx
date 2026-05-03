import React from "react";

const educationData = [
  {
    year: "2018 – 2022",
    title: "B.Tech in Computer Science",
    institute: "Galgotias University, Greater Noida (U.P.)",
    desc: "Graduated with CGPA 6.89. Gained strong foundation in computer science, software engineering, and web technologies.",
  },
];

const certificationData = [
  {
    year: "2025",
    title: "Full Stack Web Development",
    institute: "Internshala",
    desc: "Completed full stack training covering MERN stack, REST APIs, and real-world project development.",
  },
  {
    year: "2025",
    title: "NSDC Certification",
    institute: "National Skill Development Corporation",
    desc: "Certified for technical and professional skill development.",
  },
  {
    year: "2022",
    title: "Research Publication",
    institute: "Galgotias University",
    desc: "Published a research paper on responsive and scalable web applications.",
  },
];

const Education = () => {
  return (
    <section className="py-24 px-6 lg:px-20 bg-[#0f172a] text-gray-200">

      {/* HEADING */}
      <h2 className="text-4xl font-bold text-center mb-16">
        Education & <span className="text-orange-500">Certifications</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12">

        {/* EDUCATION */}
        <div className="bg-[#020617] border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:border-orange-500 transition">

          {educationData.map((item, index) => (
            <div key={index} className="mb-6">

              <p className="text-green-400 text-sm">
                {item.year}
              </p>

              <h3 className="text-xl font-bold text-orange-500">
                {item.title}
              </h3>

              <p className="text-gray-300">
                {item.institute}
              </p>

              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

        {/* CERTIFICATIONS */}
        <div className="bg-[#020617] border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:border-orange-500 transition">

          {certificationData.map((item, index) => (
            <div key={index} className="mb-6">

              <p className="text-green-400 text-sm">
                {item.year}
              </p>

              <h3 className="text-xl font-bold text-orange-500">
                {item.title}
              </h3>

              <p className="text-gray-300">
                {item.institute}
              </p>

              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Education;