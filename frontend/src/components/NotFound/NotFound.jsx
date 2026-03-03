import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-black relative overflow-hidden">
      {/* Subtle glow blobs */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-sky-900/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 text-center flex flex-col items-center max-w-2xl mx-auto">
        {/* Animated Rings for visual interest */}
        <div className="relative mb-8 group flex items-center justify-center">
          <div className="absolute -inset-4 rounded-full border border-sky-500/20 animate-[spin_10s_linear_infinite] group-hover:border-sky-500/50 transition-colors duration-500"></div>
          <div className="absolute -inset-8 rounded-full border border-purple-500/20 animate-[spin_15s_linear_infinite_reverse] group-hover:border-purple-500/50 transition-colors duration-500"></div>

          <h1 className="text-8xl md:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 relative z-10 px-8 py-4">
            404
          </h1>
        </div>

        <h2 className="text-2xl md:text-3xl font-light text-gray-200 mb-6">
          Oops! Page not found
        </h2>

        <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.
        </p>

        <Link
          to="/"
          className="group relative inline-flex items-center justify-center px-8 py-4 bg-sky-500 text-white font-medium rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
          <span className="relative z-10 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Home
          </span>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
