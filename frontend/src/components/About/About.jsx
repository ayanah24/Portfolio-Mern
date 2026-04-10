
const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center px-6 bg-black relative overflow-hidden py-24">

            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-900/10 rounded-full blur-[100px] -translate-y-1/2 -z-10 animate-pulse"></div>

            <div className="max-w-xl md:max-w-4xl mx-auto w-full">
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
                        About Me
                        <span className="absolute -bottom-2 left-1/4 w-1/2 h-[3px] bg-gradient-to-r from-sky-400 to-purple-500 rounded-full text-center"></span>
                    </h2>
                </div>

                <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-6 relative z-10 font-light">
                        I'm Ayan Ahmad, Aspiring  Software Development Engineer with a strong foundation in full-stack development, data structures, and scalable system design. I am pursuing a B.Tech in Computer Science from Integral University, Lucknow, with hands-on experience building and deploying production-grade web applications.
                    </p>
                    <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-10 relative z-10 font-light">
                        My technical expertise spans the MERN stack, RESTful API design, secure authentication systems, and database optimization.
                        Beyond development, I have solved 300+ algorithmic problems across LeetCode etc. reinforcing my ability to write efficient, well-structured code under real engineering constraints.
                    </p>
                    <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-10 relative z-10 font-light">
                        I am passionate about building innovative solutions that solve real-world problems and am always eager to learn new technologies.
                        I approach every project with an emphasis on reliability, maintainability, and performance — qualities I believe are fundamental to sound software engineering.
                    </p>

                    <h3 className="text-xl text-white font-medium mb-6 relative z-10 border-l-4 border-sky-400 pl-3">What I Bring to the Table</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base relative z-10">
                        <li className="bg-white/5 border border-white/10 p-4 rounded-xl text-gray-300 hover:border-sky-500/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                            <span className="block text-sky-400 font-medium mb-1">Frontend & Backend</span>
                            Proficient in modern frameworks like React, Node.js, and Express.
                        </li>
                        <li className="bg-white/5 border border-white/10 p-4 rounded-xl text-gray-300 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                            <span className="block text-purple-400 font-medium mb-1">Architecture</span>
                            Experience with RESTful APIs, database design (MongoDB), and Git.
                        </li>
                        <li className="bg-white/5 border border-white/10 p-4 rounded-xl text-gray-300 hover:border-sky-500/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                            <span className="block text-sky-400 font-medium mb-1">Computer Science</span>
                            Solid understanding of data structures, algorithms, and complexity analysis.
                        </li>
                        <li className="bg-white/5 border border-white/10 p-4 rounded-xl text-gray-300 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                            <span className="block text-purple-400 font-medium mb-1">Continuous Learning</span>
                            Exploring AI, DevOps, and constantly learning new technologies.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
export default About;