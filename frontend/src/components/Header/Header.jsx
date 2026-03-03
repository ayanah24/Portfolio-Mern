import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [resumeUrl, setResumeUrl] = useState("/resume.pdf"); // Fallback if no db setup

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

  const links = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "project" },
    { name: "Contact", id: "contact" },
  ];

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }




  const location = useLocation();

  if (location.pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl bg-black/40 backdrop-blur-md border border-white/10 rounded-full z-50 shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex-shrink-0">
          <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500 tracking-tighter cursor-pointer hover:opacity-80 transition-opacity" style={{ fontFamily: 'Outfit' }} onClick={() => scrollTo("home")}>
            Ayan<span className="text-sky-400">.</span>
          </h2>
        </div>

        {/* Desktop Links (Centered) */}
        <ul className="hidden md:flex items-center justify-center gap-8 text-[15px] font-semibold tracking-wide">
          {links.map((l) => (
            <li key={l.name}>
              <button
                onClick={() => scrollTo(l.id)}
                className="relative group text-gray-300 hover:text-white transition-colors py-2 px-1"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {l.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-sky-400 to-purple-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button / Aesthetic element (Right side) */}
        <div className="hidden md:flex flex-shrink-0 items-center justify-center gap-4">
          <button
            onClick={() => scrollTo("contact")}
            className="px-5 py-2 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-sky-500 hover:border-sky-500 hover:shadow-[0_0_15px_rgba(14,165,233,0.4)] transition-all duration-300"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Hire Me
          </button>
          <a
            href="/admin"
            className="text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1.5"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Admin</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden block p-2 text-gray-300 hover:text-white transition-colors focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
          </svg>
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-[calc(100%+1rem)] left-0 w-full bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${open ? 'max-h-80 opacity-100 py-4 shadow-2xl' : 'max-h-0 opacity-0 py-0'}`}
      >
        <ul className="flex flex-col space-y-2 px-4 text-sm font-medium">
          {links.map((l) => (
            <li key={l.name}>
              <button
                onClick={() => {
                  scrollTo(l.id);
                  setOpen(false);
                }}
                className="w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
              >
                {l.name}
              </button>
            </li>
          ))}
          <li className="pt-2 mt-2 border-t border-white/10 flex flex-col gap-2">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="w-full text-center px-4 py-3 text-sky-400 hover:bg-white/5 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              Resume
            </a>
            <a
              href="/admin"
              onClick={() => setOpen(false)}
              className="w-full text-center px-4 py-3 text-purple-400 hover:bg-white/5 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Admin Portal
            </a>
            <button
              onClick={() => {
                scrollTo("contact");
                setOpen(false);
              }}
              className="w-full text-center px-4 py-3 text-white bg-sky-500/20 text-sky-400 border border-sky-500/30 rounded-xl hover:bg-sky-500 hover:text-white transition-all"
            >
              Hire Me
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};


