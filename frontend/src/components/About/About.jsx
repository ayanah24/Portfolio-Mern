
const About = () => {
    return(
        <section id="about" className="min-h-screen flex items-center px-6 bg-linear-to-br from-[#1a1a1a] via-[#0f172a] to-[#000000] relative overflow-hidden">
            <div className="max-w-xl md:max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    About Me
                </h2>

                <p className="text-sm sm:text-base leading-relaxed text-gray-400 mb-4">
                    I am a MERN stack developer who enjoys building clean and user-friendly web applications. I focus on writing readable and maintainable code.
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-gray-400 mb-6">
                    I have worked on multiple projects using React, Node.js, Express, and MongoDB, and I like solving real-world problems through code. One of my recent projects is a property listing platform that allows users to browse and list properties for rent or sale, built with Express.js, MongoDB, and Node.js.
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base">
                    <li className="bg-[#0f172a] border border-gray-700 p-3 rounded text-gray-300">Proficient in JavaScript, HTML, CSS, and modern frameworks like React and Node.js.</li>
                    <li className="bg-[#0f172a] border border-gray-700 p-3 rounded text-gray-300">Experience with RESTful APIs, database design, and version control using Git.</li>
                    <li className="bg-[#0f172a] border border-gray-700 p-3 rounded text-gray-300">Strong problem-solving skills and ability to work collaboratively in a team environment.</li>
                    <li className="bg-[#0f172a] border border-gray-700 p-3 rounded text-gray-300">Proficient in data structures and algorithms, with a solid understanding of time and space complexity analysis.</li>
                    <li className="bg-[#0f172a] border border-gray-700 p-3 rounded text-gray-300">Exploring AI and DevOps and learning new technologies.</li>
                </ul>
            </div>
        </section>    
    );
};
export default About;