const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl font-bold">
        Anjali <span className="text-orange-400">Sharma</span>
      </h1>
      <p className="mt-4 text-gray-300 max-w-xl">
        Full Stack Developer skilled in MERN stack, building scalable apps and APIs.
      </p>

      <div className="mt-6 flex gap-4">
        <a href="mailto:anjalisharma14040@gmail.com"
           className="bg-orange-500 px-6 py-2 rounded-full hover:bg-orange-600">
          Email
        </a>
        <a href="https://github.com/anjalisharma-04"
           target="_blank"
           className="border px-6 py-2 rounded-full">
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Hero;