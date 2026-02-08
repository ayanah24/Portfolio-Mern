import { useState } from "react";
import {  useLocation } from "react-router-dom";

export default function Header() {
   const [open, setOpen] = useState(false);
   
const links = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "project" },
  { name: "Contact", id: "contact" },
];

const scrollTo=(id)=>{
  document.getElementById(id).scrollIntoView({ 
    behavior: "smooth",
    block: "start"
   });
}




const location = useLocation();

if (location.pathname.startsWith("/admin")) {
  return null;
}

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
      <button
        onClick={() => scrollTo(l.id)}
        className="text-gray-200 hover:text-sky-400 transition"
      >
        {l.name}
      </button>
    </li>
  ))}
</ul>



        {/* Mobile Menu Button */}
       <button
  onClick={() => setOpen(!open)}
  className="md:hidden block text-gray-200 hover:text-sky-400"
>
  ☰
</button>

      </div>
       {/* Mobile Menu */}
      {open && (
     <ul className="md:hidden bg-slate-900 px-6 pb-6 space-y-4 text-sm">
          {links.map((l) => (
            <li key={l.name}>
              <button
                onClick={() => {
                  scrollTo(l.id);
                  setOpen(false);
                }}
                className="block text-gray-200 hover:text-sky-400"
              >
                {l.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};


