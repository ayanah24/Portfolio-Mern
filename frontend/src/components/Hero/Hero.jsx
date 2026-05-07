import { useState, useEffect, useRef } from "react";
import axios from "axios";
import API_URL from "../../utils/api";

/* ─── Keyframe CSS injected once into <head> ─── */
const STYLES = `
  @keyframes devBob {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-10px); }
  }
  @keyframes devScreenFlicker {
    0%, 91%, 100% { opacity: 1; }
    92%  { opacity: 0.55; }
    94%  { opacity: 1; }
    97%  { opacity: 0.75; }
    98%  { opacity: 1; }
  }
  @keyframes devTypeCaret {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }
  @keyframes devBadgeFloat1 {
    0%, 100% { transform: translateY(0px) rotate(-2deg); }
    50%       { transform: translateY(-8px) rotate(2deg); }
  }
  @keyframes devBadgeFloat2 {
    0%, 100% { transform: translateY(0px) rotate(1deg); }
    50%       { transform: translateY(-11px) rotate(-1deg); }
  }
  @keyframes devBadgeFloat3 {
    0%, 100% { transform: translateY(0px) rotate(-1deg); }
    50%       { transform: translateY(-7px) rotate(3deg); }
  }
  @keyframes devBadgeFloat4 {
    0%, 100% { transform: translateY(0px) rotate(2deg); }
    50%       { transform: translateY(-9px) rotate(-2deg); }
  }
  @keyframes devSpark1 {
    0%   { transform: translate(0,0) scale(1); opacity: 0.9; }
    100% { transform: translate(-18px,-28px) scale(0.2); opacity: 0; }
  }
  @keyframes devSpark2 {
    0%   { transform: translate(0,0) scale(1); opacity: 0.9; }
    100% { transform: translate(14px,-32px) scale(0.2); opacity: 0; }
  }
  @keyframes devSpark3 {
    0%   { transform: translate(0,0) scale(1); opacity: 0.8; }
    100% { transform: translate(20px,-20px) scale(0.1); opacity: 0; }
  }
  @keyframes devLineScroll {
    0%   { transform: translateY(0); }
    100% { transform: translateY(-36px); }
  }
  @keyframes devWifi {
    0%, 100% { opacity: 0.15; }
    50%       { opacity: 1; }
  }
  @keyframes devGlowPulse {
    0%, 100% { opacity: 0.45; transform: scale(1); }
    50%       { opacity: 0.8;  transform: scale(1.07); }
  }
  @media (max-width: 767px) {
    .hero-tech-visual { transform: scale(0.72); margin: -30px 0; }
  }
`;

const BADGES = [
  { label: "React", color: "#61DAFB", bg: "rgba(97,218,251,0.10)", anim: "devBadgeFloat1", dur: "3.2s", top: "4%", left: "0%" },
  { label: "Node.js", color: "#68A063", bg: "rgba(104,160,99,0.10)", anim: "devBadgeFloat2", dur: "3.8s", top: "10%", left: "64%" },
  { label: "MongoDB", color: "#4DB33D", bg: "rgba(77,179,61,0.10)", anim: "devBadgeFloat3", dur: "4.1s", top: "74%", left: "0%" },
  { label: "JS", color: "#F7DF1E", bg: "rgba(247,223,30,0.10)", anim: "devBadgeFloat4", dur: "3.5s", top: "80%", left: "66%" },
];

const CODE_RECTS = [
  { y: 126, w: 38, color: "#c084fc", indent: 0 },
  { y: 134, w: 55, color: "#38bdf8", indent: 10 },
  { y: 142, w: 42, color: "#86efac", indent: 10 },
  { y: 150, w: 30, color: "#fde68a", indent: 10 },
  { y: 158, w: 18, color: "#c084fc", indent: 0 },
  { y: 166, w: 60, color: "#38bdf8", indent: 0 },
  { y: 174, w: 45, color: "#86efac", indent: 10 },
  { y: 182, w: 35, color: "#fde68a", indent: 10 },
  { y: 190, w: 22, color: "#c084fc", indent: 0 },
  { y: 198, w: 50, color: "#38bdf8", indent: 0 },
  /* duplicated for seamless scroll */
  { y: 206, w: 38, color: "#c084fc", indent: 0 },
  { y: 214, w: 55, color: "#38bdf8", indent: 10 },
  { y: 222, w: 42, color: "#86efac", indent: 10 },
];

const TechVisual = () => (
  <div className="hero-tech-visual" style={{ position: "relative", width: "360px", height: "380px", display: "flex", alignItems: "center", justifyContent: "center" }}>

    {/* Floating tech-stack badges */}
    {BADGES.map((b) => (
      <div key={b.label} style={{ position: "absolute", top: b.top, left: b.left, animation: `${b.anim} ${b.dur} ease-in-out infinite`, zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "5px 12px", background: b.bg, border: `1px solid ${b.color}55`, borderRadius: "999px", backdropFilter: "blur(8px)", boxShadow: `0 0 10px ${b.color}22` }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: b.color, boxShadow: `0 0 5px ${b.color}` }} />
          <span style={{ color: b.color, fontSize: "11px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.04em" }}>{b.label}</span>
        </div>
      </div>
    ))}

    {/* Main bobbing SVG character */}
    <div style={{ animation: "devBob 4s ease-in-out infinite", zIndex: 5 }}>
      <svg width="260" height="300" viewBox="0 0 260 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="dg1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="dg2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          <linearGradient id="dg3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.22" />
          </linearGradient>
          <filter id="df1">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <clipPath id="sc">
            <rect x="72" y="118" width="116" height="94" rx="3" />
          </clipPath>
        </defs>

        {/* Glow orb behind character */}
        <circle cx="130" cy="168" r="90" fill="url(#dg1)"
          style={{ animation: "devGlowPulse 3s ease-in-out infinite" }} />

        {/* ── DESK ── */}
        <rect x="30" y="240" width="200" height="12" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
        <rect x="90" y="252" width="16" height="28" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1" />
        <rect x="154" y="252" width="16" height="28" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1" />
        <rect x="60" y="278" width="140" height="8" rx="4" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />

        {/* ── LAPTOP BASE / keyboard ── */}
        <rect x="55" y="218" width="150" height="26" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
        {[70, 90, 110, 130, 150, 170].map((x, i) => (
          <rect key={i} x={x} y="226" width="12" height="6" rx="2" fill="#0f172a" stroke="#38bdf8" strokeWidth="0.5" opacity="0.6" />
        ))}

        {/* ── LAPTOP SCREEN ── */}
        <rect x="62" y="108" width="136" height="114" rx="8" fill="url(#dg2)" stroke="#334155" strokeWidth="1.5" />
        <rect x="68" y="114" width="124" height="102" rx="5" fill="#050c1a"
          style={{ animation: "devScreenFlicker 6s ease-in-out infinite" }} />

        {/* Scrolling code lines */}
        <g clipPath="url(#sc)">
          <g style={{ animation: "devLineScroll 3.5s linear infinite" }}>
            {CODE_RECTS.map((l, i) => (
              <rect key={i} x={72 + l.indent} y={l.y} width={l.w} height="5" rx="2" fill={l.color} opacity="0.8" />
            ))}
            <rect x="72" y="232" width="6" height="7" rx="1" fill="#38bdf8"
              style={{ animation: "devTypeCaret 1s step-end infinite" }} />
          </g>
        </g>

        {/* Screen top bar with traffic lights */}
        <rect x="68" y="114" width="124" height="10" rx="3" fill="rgba(255,255,255,0.04)" />
        <circle cx="76" cy="119" r="3" fill="#ff5f56" />
        <circle cx="85" cy="119" r="3" fill="#ffbd2e" />
        <circle cx="94" cy="119" r="3" fill="#27c93f" />
        <rect x="112" y="117" width="32" height="4" rx="2" fill="rgba(255,255,255,0.08)" />

        {/* ── TORSO / hoodie ── */}
        <rect x="102" y="60" width="56" height="52" rx="18"
          fill="url(#dg3)" stroke="#38bdf855" strokeWidth="1.5" filter="url(#df1)" />
        <path d="M113 95 Q130 102 147 95" stroke="#38bdf844" strokeWidth="1.2" fill="none" />
        {/* React logo on hoodie */}
        <circle cx="130" cy="79" r="6" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
        <circle cx="130" cy="79" r="1.8" fill="#61DAFB" />

        {/* ── ARMS ── */}
        <path d="M102 72 Q80 95 76 218" stroke="#38bdf866" strokeWidth="10" strokeLinecap="round" fill="none" />
        <path d="M158 72 Q180 95 184 218" stroke="#38bdf866" strokeWidth="10" strokeLinecap="round" fill="none" />
        <ellipse cx="80" cy="220" rx="10" ry="7" fill="#93c5fd" opacity="0.85" />
        <ellipse cx="180" cy="220" rx="10" ry="7" fill="#93c5fd" opacity="0.85" />

        {/* ── HEAD ── */}
        <ellipse cx="130" cy="44" rx="26" ry="28" fill="#93c5fd" opacity="0.9" />
        {/* hair */}
        <path d="M104 36 Q108 16 130 16 Q152 16 156 36" fill="#1e293b" />
        {/* eyes */}
        <ellipse cx="121" cy="42" rx="4" ry="5" fill="#0f172a" />
        <ellipse cx="139" cy="42" rx="4" ry="5" fill="#0f172a" />
        <circle cx="123" cy="40" r="1.5" fill="white" opacity="0.85" />
        <circle cx="141" cy="40" r="1.5" fill="white" opacity="0.85" />
        {/* smile */}
        <path d="M122 52 Q130 58 138 52" stroke="#0f172a" strokeWidth="1.8" fill="none" strokeLinecap="round" />

        {/* headphones */}
        <path d="M104 44 Q100 28 130 22 Q160 28 156 44"
          stroke="#38bdf8" strokeWidth="4" fill="none" strokeLinecap="round" />
        <rect x="99" y="40" width="10" height="14" rx="5" fill="#38bdf8" opacity="0.9" />
        <rect x="151" y="40" width="10" height="14" rx="5" fill="#38bdf8" opacity="0.9" />

        {/* ── KEYBOARD SPARKS ── */}
        <circle cx="112" cy="217" r="3" fill="#38bdf8"
          style={{ animation: "devSpark1 1.8s ease-out infinite", animationDelay: "0s" }} />
        <circle cx="138" cy="213" r="2.5" fill="#c084fc"
          style={{ animation: "devSpark2 2.2s ease-out infinite", animationDelay: "0.6s" }} />
        <circle cx="162" cy="216" r="2" fill="#fde68a"
          style={{ animation: "devSpark3 2s ease-out infinite", animationDelay: "1.1s" }} />

        {/* ── WIFI above head ── */}
        <g transform="translate(145,8)" opacity="0.85">
          <path d="M0 12 Q6 6 12 12" stroke="#38bdf8" strokeWidth="1.5" fill="none" strokeLinecap="round"
            style={{ animation: "devWifi 1.5s ease-in-out infinite", animationDelay: "0s" }} />
          <path d="M-4 16 Q6 4 16 16" stroke="#38bdf8" strokeWidth="1.5" fill="none" strokeLinecap="round"
            style={{ animation: "devWifi 1.5s ease-in-out infinite", animationDelay: "0.3s" }} />
          <path d="M-8 20 Q6 2 20 20" stroke="#38bdf8" strokeWidth="1.5" fill="none" strokeLinecap="round"
            style={{ animation: "devWifi 1.5s ease-in-out infinite", animationDelay: "0.6s" }} />
          <circle cx="6" cy="22" r="2" fill="#38bdf8"
            style={{ animation: "devWifi 1.5s ease-in-out infinite", animationDelay: "0.9s" }} />
        </g>
      </svg>
    </div>
  </div>
);

/* ─────────────────────── Main Hero ─────────────────────── */
const Hero = () => {
  const [resumeUrl, setResumeUrl] = useState("/resume.pdf");
  const styleInjected = useRef(false);

  useEffect(() => {
    if (!styleInjected.current) {
      const tag = document.createElement("style");
      tag.textContent = STYLES;
      document.head.appendChild(tag);
      styleInjected.current = true;
    }
  }, []);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/resume`);
        if (res.data && res.data.resumeUrl) setResumeUrl(res.data.resumeUrl);
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
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 w-full mt-10">

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

        {/* RIGHT CONTENT — animated tech guy */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <TechVisual />
        </div>

      </div>
    </section>
  );
};

export default Hero;
