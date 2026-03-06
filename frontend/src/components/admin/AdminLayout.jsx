import { useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/");
  };

  const navLinks = [
    { name: 'Dashboard', path: '/admin' },
    { name: 'Manage Contacts', path: '/admin/contacts' },
    { name: 'Manage Projects', path: '/admin/projects' },
    { name: 'Manage Resume', path: '/admin/resume' },
  ];

  return (
    <div className="min-h-screen flex bg-slate-950 text-white font-sans">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? "w-64" : "w-0"} bg-slate-900 border-r border-white/10 flex flex-col transition-all duration-300 overflow-hidden shrink-0`}>
        <div className="p-6 border-b border-white/10 flex items-center justify-between shrink-0">
          <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500 whitespace-nowrap">Admin <span className="text-sky-400">Panel</span></h2>
        </div>

        <nav className="flex-1 px-4 py-6 flex flex-col gap-2 overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path === '/admin' && location.pathname === '/admin/');
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-3 rounded-xl transition-all duration-300 whitespace-nowrap ${isActive ? 'bg-gradient-to-r from-sky-500/20 to-purple-500/20 text-sky-400 font-semibold border border-sky-500/30 shadow-[0_0_15px_rgba(56,189,248,0.15)]' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-white/10 shrink-0">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 mb-4 text-sm font-semibold rounded-lg text-red-400 bg-red-400/10 hover:bg-red-400/20 hover:text-red-300 transition-colors"
          >
            Logout
          </button>
          <Link to="/" className="flex items-center gap-2 text-sm text-slate-400 hover:text-sky-400 transition-colors">
            &larr; Back to Site
          </Link>
        </div>
      </aside>

      {/* Page Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-16 border-b border-white/10 bg-slate-900/50 backdrop-blur-md flex items-center px-6 sticky top-0 z-10 shrink-0">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </header>

        {/* Main scrollable area */}
        <div className="flex-1 overflow-y-auto p-8 relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/10 via-slate-950 to-slate-950 pointer-events-none"></div>
          <div className="max-w-6xl mx-auto space-y-8 h-full">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  )
}
export default AdminLayout;