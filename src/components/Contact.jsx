import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully 🚀");
  };

  return (
    <section
      id="contact"
      className="bg-[#0f172a] py-20 px-4 sm:px-6 flex justify-center"
    >

      {/* CONTAINER */}
      <div className="max-w-6xl w-full bg-[#020617] rounded-3xl p-6 sm:p-10 md:p-14 shadow-[0_0_40px_rgba(255,115,0,0.15)]">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT */}
          <div className="flex flex-col justify-center">

            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Contact <span className="text-orange-500">Me</span>
            </h2>

            {/* EMAIL */}
            <div className="flex items-center gap-3 mb-3 text-gray-400 text-sm sm:text-base">
              <FaEnvelope className="text-orange-500" />
              <span className="break-all">anjalisharma14040@gmail.com</span>
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-3 mb-6 text-gray-400 text-sm sm:text-base">
              <FaPhone className="text-orange-500" />
              <span>+91 6387714725</span>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 mb-6">

              <a
                href="https://github.com/anjalisharma-04"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0f172a] p-3 rounded-full border border-gray-800 hover:border-orange-500 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0f172a] p-3 rounded-full border border-gray-800 hover:border-orange-500 transition"
              >
                <FaLinkedin />
              </a>

            </div>

            {/* RESUME */}
            <a
              href="/anjali_resume.pdf"   // ✅ FIXED NAME
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition text-center w-fit"
            >
              Download Resume
            </a>

          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-5"
          >

            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-lg bg-[#0f172a] border border-gray-800 text-white focus:outline-none focus:border-orange-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-lg bg-[#0f172a] border border-gray-800 text-white focus:outline-none focus:border-orange-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-4 rounded-lg bg-[#0f172a] border border-gray-800 text-white focus:outline-none focus:border-orange-500 resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 py-3 rounded-full text-white font-semibold transition w-full sm:w-fit px-8"
            >
              Submit
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;