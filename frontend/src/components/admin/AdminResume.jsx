import { useState, useEffect } from "react";
import axios from "axios";

export default function AdminResume() {
    const [resumeUrl, setResumeUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);

    // Fetch the existing global resume link on mount
    useEffect(() => {
        const fetchResume = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/resume");
                if (res.data && res.data.resumeUrl) {
                    setResumeUrl(res.data.resumeUrl);
                }
            } catch (error) {
                console.error("Error fetching initial resume:", error);
            }
        };
        fetchResume();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const res = await axios.put("http://localhost:5000/api/resume", {
                url: resumeUrl,
            });
            setMessage("Resume link successfully updated!");
            setIsError(false);
        } catch (error) {
            console.error(error);
            setMessage("Failed to update the resume link. Please check your backend.");
            setIsError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Manage Resume</h2>
                <p className="text-gray-400">Update the global link to your Resume PDF file. We recommend using a public Google Drive sharing link here.</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                            Public Resume URL (Google Drive, AWS, etc)
                        </label>
                        <input
                            type="text"
                            value={resumeUrl}
                            onChange={(e) => setResumeUrl(e.target.value)}
                            placeholder="https://drive.google.com/file/d/..."
                            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                            required
                        />
                    </div>

                    <div className="h-6">
                        {message && (
                            <p className={`text-sm font-medium ${isError ? 'text-red-400' : 'text-emerald-400'}`}>
                                {message}
                            </p>
                        )}
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={loading || !resumeUrl}
                            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${loading || !resumeUrl
                                ? 'bg-slate-800 text-gray-500 cursor-not-allowed'
                                : 'bg-sky-500 hover:bg-sky-600 text-white hover:shadow-[0_0_15px_rgba(14,165,233,0.4)]'
                                }`}
                        >
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Saving...
                                </span>
                            ) : (
                                'Save Resume Link'
                            )}
                        </button>
                    </div>

                </form>
            </div>

            {resumeUrl && (
                <div className="mt-8 p-6 bg-sky-900/10 border border-sky-500/20 rounded-xl">
                    <h3 className="text-sm font-medium text-sky-400 mb-2 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        Current Live Link
                    </h3>
                    <a
                        href={resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white break-all text-sm underline underline-offset-4 decoration-sky-500/50 hover:decoration-sky-500 transition-all"
                    >
                        {resumeUrl}
                    </a>
                </div>
            )}
        </div>
    );
}
