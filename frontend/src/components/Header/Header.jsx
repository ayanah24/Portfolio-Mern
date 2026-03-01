import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

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
    <nav className="fixed top-0 left-0 w-full bg-slate-950/50 backdrop-blur-xl border-b border-white/10 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500 tracking-tighter" style={{ fontFamily: 'Outfit' }}>
          Ayan<span className="text-sky-400">.</span>
        </h2>
        {/* Desktop Links */}

        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((l) => (
            <li key={l.name}>
              <button
                onClick={() => scrollTo(l.id)}
                className="relative group text-gray-300 hover:text-white transition-colors py-1"
              >
                {l.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-sky-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
          ))}
        </ul>



        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden block text-gray-200 hover:text-sky-400 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-white/10 py-4 px-6 shadow-2xl">
          <ul className="flex flex-col space-y-4 text-sm font-medium">
            {links.map((l) => (
              <li key={l.name}>
                <button
                  onClick={() => {
                    scrollTo(l.id);
                    setOpen(false);
                  }}
                  className="w-full text-left py-2 text-gray-300 hover:text-white hover:text-glow transition"
                >
                  {l.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};


