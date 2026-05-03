import React from "react";

const technicalSkills = [
  { name: "React.js", percent: 90 },
  { name: "Node.js", percent: 85 },
  { name: "MongoDB", percent: 80 },
  { name: "JavaScript", percent: 88 },
  { name: "Express.js", percent: 82 },
  { name: "Tailwind CSS", percent: 85 },
];

const softSkills = [
  { name: "Team Work", percent: 85 },
  { name: "Creativity", percent: 80 },
  { name: "Problem Solving", percent: 88 },
  { name: "Communication", percent: 75 },
];

const Skills = () => {
  return (
    <section className="py-24 px-6 lg:px-20 bg-[#0f172a] text-gray-200">

      {/* HEADING */}
      <h2 className="text-4xl font-bold text-center mb-16">
        My <span className="text-orange-500">Skills</span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-16">

        {/* LEFT SIDE - PROGRESS BARS */}
        <div className="flex-1 space-y-6">

          {technicalSkills.map((skill, index) => (
            <div key={index}>

              <div className="flex justify-between mb-2">
                <span className="text-white font-medium">
                  {skill.name}
                </span>
                <span className="text-orange-500 font-semibold">
                  {skill.percent}%
                </span>
              </div>

              <div className="w-full bg-gray-800 rounded-full h-3">
                <div
                  className="bg-orange-500 h-3 rounded-full transition-all duration-700"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>

            </div>
          ))}

        </div>

        {/* RIGHT SIDE - CIRCULAR */}
        <div className="flex-1 grid grid-cols-2 gap-10 place-items-center">

          {softSkills.map((skill, index) => {
            const radius = 45;
            const circumference = 2 * Math.PI * radius;

            return (
              <div key={index} className="flex flex-col items-center">

                <div className="relative w-32 h-32">

                  <svg className="w-full h-full transform -rotate-90">

                    {/* Background */}
                    <circle
                      cx="50%"
                      cy="50%"
                      r={radius}
                      stroke="#1f2937"
                      strokeWidth="10"
                      fill="none"
                    />

                    {/* Progress */}
                    <circle
                      cx="50%"
                      cy="50%"
                      r={radius}
                      stroke="#f97316"
                      strokeWidth="10"
                      fill="none"
                      strokeDasharray={circumference}
                      strokeDashoffset={
                        circumference -
                        (circumference * skill.percent) / 100
                      }
                      strokeLinecap="round"
                    />

                  </svg>

                  {/* Percentage */}
                  <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">
                    {skill.percent}%
                  </div>

                </div>

                <p className="mt-4 text-white font-medium text-center">
                  {skill.name}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default Skills;