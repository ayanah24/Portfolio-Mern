import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
   const [open, setOpen] = useState(false);
   const links=[
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
   ]

  const isActive=(path)=>location.pathname===path;

  return(
  <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h2 className="text-xl font-bold text-sky-400">
          Ayan
        </h2>
         {/* Desktop Links */}
          <ul className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((l) => (
            <li key={l.name}>
              <Link
                to={l.path}
                className={`transition ${
                  isActive(l.path)
                    ? "text-sky-400"
                    : "text-gray-200 hover:text-sky-400"
                }`}
              >
                {l.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-200 text-xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
       {/* Mobile Menu */}
      {open && (
     <ul className="md:hidden bg-slate-900 px-6 pb-6 space-y-4 text-sm">
          {links.map((l) => (
            <li key={l.name}>
              <Link
                to={l.path}
                onClick={() => setOpen(false)}
                className={`block ${
                  isActive(l.path)
                    ? "text-sky-400"
                    : "text-gray-200 hover:text-sky-400"
                }`}
              >
                {l.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};


