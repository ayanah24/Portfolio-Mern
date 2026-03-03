import { useState, useEffect } from "react";
import axios from "axios";

const Hero = () => {
  const [resumeUrl, setResumeUrl] = useState("/resume.pdf");

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/resume");
        if (res.data && res.data.resumeUrl) {
          setResumeUrl(res.data.resumeUrl);
        }
      } catch (error) {
        console.error("Could not fetch dynamic resume link", error);
      }
    };
    fetchResume();
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 bg-black relative overflow-hidden pt-20"
    >

      {/* Subtle glow blobs */}
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-sky-900/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">

        {/* LEFT CONTENT */}
        <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <p className="text-gray-300 text-sm tracking-wide font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
              Available for new projects
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white tracking-tight leading-tight">
            Hi, I'm <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600">
              Ayan Ahmad
            </span>
          </h1>

          <h2 className="text-xl md:text-3xl text-gray-300 mb-6 font-light">
            MERN Stack Developer
          </h2>

          <p className="text-gray-400/80 max-w-lg mb-10 text-lg leading-relaxed">
            I craft clean, scalable, and user-focused web applications.
            Transforming complex problems into elegant, modern digital experiences.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 w-full">
            <a
              href="#contact"
              className="group relative px-8 py-3.5 bg-sky-500 text-white font-medium rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <span className="relative z-10">Let's Talk</span>
            </a>

            <a
              href="#project"
              className="px-8 py-3.5 border border-white/10 bg-white/5 text-gray-300 font-medium rounded-lg backdrop-blur-sm transition-all hover:bg-white/10 hover:text-white hover:border-white/20 hover:scale-105"
            >
              View Work
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3.5 border border-sky-500/30 bg-sky-500/10 text-sky-400 font-medium rounded-lg backdrop-blur-sm transition-all hover:bg-sky-500/20 hover:border-sky-500/50 hover:scale-105"
            >
              <span>Resume</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT CONTENT - PROFILE PIC */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative group">
            {/* Animated rings */}
            <div className="absolute -inset-4 rounded-full border border-sky-500/20 animate-[spin_10s_linear_infinite] group-hover:border-sky-500/50 transition-colors duration-500"></div>
            <div className="absolute -inset-8 rounded-full border border-purple-500/20 animate-[spin_15s_linear_infinite_reverse] group-hover:border-purple-500/50 transition-colors duration-500"></div>

            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_40px_rgba(14,165,233,0.15)] group-hover:shadow-[0_0_60px_rgba(14,165,233,0.3)] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img
                src="/profile.jpg"
                alt="Ayan Ahmad"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

