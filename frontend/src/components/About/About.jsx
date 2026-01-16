
const About = () => {
    return(
       <section id="about" className="py-20 px-4 bg-white max-w-7xl mx-auto">
        <div className="max-w-xl md:max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          About Me
        </h2>

        <p className="text-sm sm:text-base leading-relaxed text-gray-600 mb-4">
             I am a MERN stack developer who enjoys building clean and
        user-friendly web applications. I focus on writing readable
        and maintainable code.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-gray-600 mb-6">
            I have worked on multiple projects using React, Node.js,
        Express, and MongoDB, and I like solving real-world problems
        through code. one of my recent projects is a property listing
        platform that allows users to browse and list properties for
        rent or sale. based on Express.js, MongoDB, and Node.js.
        
         </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base">
            <li className="bg-gray-50 p-3 rounded">Proficient in JavaScript, HTML, CSS, and modern frameworks like React and Node.js.</li>
            <li className="bg-gray-50 p-3 rounded">Experience with RESTful APIs, database design, and version control using Git.</li>
            <li className="bg-gray-50 p-3 rounded">Strong problem-solving skills and ability to work collaboratively in a team environment.</li>
            <li className="bg-gray-50 p-3 rounded">proficient in data structures and algorithms, with a solid understanding of time and space complexity analysis.</li>
            <li className="bg-gray-50 p-3 rounded">exploring ai and devops and learning new technologies.</li>
         </ul>
         </div>
       </section>    
    );
};
export default About;