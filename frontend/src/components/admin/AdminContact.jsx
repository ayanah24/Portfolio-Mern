import { useEffect, useState } from "react";
import axios from "axios";

const AdminContact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/contact")
      .then((res) => setContacts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this contact message?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/contact/${id}`);
      setContacts((prev) => prev.filter((c) => c._id !== id));
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">Contact Messages</h1>
          <p className="text-slate-400">View and manage messages from your portfolio contact form.</p>
        </div>
        <div className="p-3 bg-sky-500/10 rounded-xl text-sky-400 border border-sky-500/20">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
        </div>
      </div>

      <div className="bg-slate-900/80 backdrop-blur-md shadow-xl rounded-2xl border border-white/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs uppercase bg-slate-800/80 text-slate-400 border-b border-white/5">
              <tr>
                <th className="px-6 py-4 font-medium tracking-wider">Name</th>
                <th className="px-6 py-4 font-medium tracking-wider">Email</th>
                <th className="px-6 py-4 font-medium tracking-wider">Message</th>
                <th className="px-6 py-4 font-medium tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {contacts.length === 0 ? (
                <tr>
                  <td colSpan="4" className="px-6 py-8 text-center text-slate-500">
                    No messages found.
                  </td>
                </tr>
              ) : (
                contacts.map((c) => (
                  <tr key={c._id} className="hover:bg-slate-800/40 transition-colors group">
                    <td className="px-6 py-4 font-medium text-white">{c.name}</td>
                    <td className="px-6 py-4 text-sky-400">{c.email}</td>
                    <td className="px-6 py-4 text-slate-300 max-w-md truncate" title={c.message}>{c.message}</td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleDelete(c._id)}
                        className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                        title="Delete Message"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminContact;