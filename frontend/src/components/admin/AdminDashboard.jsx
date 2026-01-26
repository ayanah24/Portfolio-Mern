const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Welcome, Ayan 👋</h1>
      <p className="text-gray-600 mb-6">
        Manage your portfolio content from here.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-sm text-gray-500">Projects</h3>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-sm text-gray-500">Messages</h3>
          <p className="text-3xl font-bold mt-2">5</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-sm text-gray-500">Last Update</h3>
          <p className="text-lg font-medium mt-2">Today</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
