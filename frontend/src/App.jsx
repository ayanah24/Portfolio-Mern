import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import AdminLayout from "./components/admin/AdminLayout";
import AdminProject from "./components/admin/AdminProject";
import AdminContact from "./components/admin/AdminContact";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminResume from "./components/admin/AdminResume";
import AdminLogin from "./components/admin/AdminLogin";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* PUBLIC SITE*/}
        <Route path="/" element={<Home />} />

        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="contacts" element={<AdminContact />} />
          <Route path="projects" element={<AdminProject />} />
          <Route path="resume" element={<AdminResume />} />
        </Route>

        {/* login */}
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
