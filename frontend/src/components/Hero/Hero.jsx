const Hero = () => {
  return (
    <section  
      id="home"
      className="min-h-screen flex items-center bg-slate-900 text-gray-200 px-4"
    >
      <div className="max-w-xl mx-auto text-center">
        
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Ayan Ahmad
        </h1>

        <h2 className="text-lg sm:text-xl md:text-2xl text-sky-400 mb-4">
          MERN Stack Developer
        </h2> 

        <p className="text-sm sm:text-base text-gray-400 mb-8 leading-relaxed">
          I build clean, scalable and user-focused web applications
          using modern web technologies.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="bg-sky-500 text-white px-6 py-3 rounded font-medium hover:bg-sky-600 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-sky-500 text-sky-400 px-6 py-3 rounded font-medium hover:bg-sky-500 hover:text-white transition"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
