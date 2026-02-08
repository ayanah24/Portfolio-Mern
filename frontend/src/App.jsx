import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import AdminLayout from "./components/admin/AdminLayout";
import AdminProject from "./components/admin/AdminProject";
import AdminContact from "./components/admin/AdminContact";
import AdminDashboard from "./components/admin/AdminDashboard";

function App() {
return (
    <BrowserRouter>
      <Header />


  <Routes>
    {/* PUBLIC SITE – SINGLE PAGE ONLY */}
    <Route path="/" element={<Home />} />

    {/* ADMIN ROUTES */}
    <Route path="/admin" element={<AdminLayout />}>
      <Route index element={<AdminDashboard />} />
      <Route path="contacts" element={<AdminContact />} />
      <Route path="projects" element={<AdminProject />} />
    </Route>

    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>

  );
}

export default App;
