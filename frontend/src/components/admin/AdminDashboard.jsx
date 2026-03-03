const AdminDashboard = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold mb-2 text-white tracking-tight">Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400">Ayan 👋</span></h1>
        <p className="text-slate-400 text-lg">
          Here's what's happening with your portfolio today.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-white/5 shadow-xl hover:border-sky-500/30 transition-all duration-300 group">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider group-hover:text-sky-400 transition-colors">Total Projects</h3>
            <div className="p-2 bg-sky-500/10 rounded-lg text-sky-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>
            </div>
          </div>
          <p className="text-4xl font-black text-white">12</p>
        </div>

        <div className="bg-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-white/5 shadow-xl hover:border-purple-500/30 transition-all duration-300 group">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider group-hover:text-purple-400 transition-colors">Messages</h3>
            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
            </div>
          </div>
          <p className="text-4xl font-black text-white">5</p>
        </div>

        <div className="bg-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-white/5 shadow-xl hover:border-emerald-500/30 transition-all duration-300 group">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider group-hover:text-emerald-400 transition-colors">System Status</h3>
            <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
            </div>
          </div>
          <p className="text-xl font-bold text-white mt-2 flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            All systems online
          </p>
        </div>
      </div>

      {/* Quick Actions / Recent Activity placeholder */}
      <div className="mt-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/5 p-8 text-center text-slate-500">
        <p>Your portfolio is up to date and performing well!</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
