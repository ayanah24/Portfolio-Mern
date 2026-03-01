import { useState } from "react";
import axios from "axios";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,

    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('Form Data Submitted:', formData);
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const res = await axios.post("http://localhost:5000/api/contact", formData);
      setSuccessMsg(res.data.message);
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMsg('Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center px-6 bg-black relative overflow-hidden py-24">

      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-900/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto w-full">

        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
            Get In Touch
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-[3px] bg-gradient-to-r from-sky-400 to-purple-500 rounded-full text-center"></span>
          </h2>
          <p className="text-gray-400 mt-4 text-center max-w-xl text-lg font-light">
            Have a question or want to work together? Leave your message below.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white/5 border border-white/10 p-8 md:p-10 rounded-2xl shadow-2xl backdrop-blur-lg relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-purple-500"></div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea
                name="message"
                placeholder="Your message here..."
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors resize-none"
                required
              ></textarea>
            </div>
          </div>

          <div className="my-4 h-6 flex items-center justify-center">
            {/* Success / Error Messages */}
            {successMsg && (
              <p className="text-emerald-400 text-sm font-medium animate-pulse">
                {successMsg}
              </p>
            )}

            {errorMsg && (
              <p className="text-red-400 text-sm font-medium animate-pulse">
                {errorMsg}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3.5 rounded-lg text-white font-medium transition-all duration-300 relative overflow-hidden group ${loading
                ? "bg-white/10 cursor-not-allowed border border-white/10"
                : "bg-sky-500 hover:bg-sky-600 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]"
              }`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              <>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                <span className="relative z-10">Send Message</span>
              </>
            )}
          </button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm font-light mb-4">You can also find me on</p>

          <div className="flex justify-center gap-6">
            <a href="mailto:ayan@email.com" className="text-gray-400 hover:text-sky-400 hover:-translate-y-1 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
            </a>
            <a href="https://github.com/ayanah24" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 hover:-translate-y-1 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/ayan-ahmad-464528214/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 hover:-translate-y-1 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;

