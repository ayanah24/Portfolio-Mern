import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return(
    <div className="min-h-screen flex bg-gray-100">
     {/* Sidebar */}
     <aside className={`${sidebarOpen ? "w-64" : "w-0"} bg-slate-800 text-white p-6 transition-all duration-300 overflow-hidden`}>
      <h2 className="text-2xl font-bold mb-5">Admin Panel</h2>

      <nav className="flex flex-col gap-4 text-sm">
        <Link to="/admin/contacts" className="hover:text-sky-300">
        Manage Contact
        </Link>
        <Link to="/admin/projects" className="hover:text-sky-300">
        Manage Projects
        </Link>
      </nav>
     </aside>

      {/* Page Content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
    
  )
}
export default AdminLayout;