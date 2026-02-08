const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 
     bg-linear-to-br from-[#1a1a1a] via-[#0f172a] to-[#000000]
    bg-black
      relative overflow-hidden"
    >

      {/* Subtle glow blobs */}
      <div className="absolute -top-25 -right-25 w-100 h-100 bg-[#0f172a]/10 rounded-full blur-3xl"></div>

      <div className="absolute -bottom-30 -left-30 w-100 h-100 bg-[#000000]/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-gray-400 mb-4 tracking-wide">Hello — I'm</p>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Ayan Ahmad
          </h1>

          <h2 className="text-xl md:text-2xl text-sky-400 mb-6">
            MERN Stack Developer
          </h2>

          <p className="text-gray-400 max-w-md mb-8 leading-relaxed">
            I build clean, scalable and user-focused web applications
            with modern technologies and problem-solving mindset.
          </p>

          <div className="flex gap-4">
            <a
              href="#contact"
              className="bg-sky-500 px-6 py-3 rounded hover:bg-sky-600 transition text-white"
            >
              Contact Me
            </a>

            <a
              href="#projects"
              className="border border-purple-500 px-6 py-3 rounded 
              hover:bg-purple-500 hover:text-white transition text-purple-400"
            >
              View Projects
            </a>
          </div>
          </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-6 rounded-full border border-sky-500/30 animate-pulse"></div>

            <img
              src="/profile.jpg"
              alt="profile"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover 
              border border-sky-500 shadow-[0_0_40px_rgba(14,165,233,0.2)]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

