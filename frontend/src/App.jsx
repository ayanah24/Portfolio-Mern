import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import AdminLayout from "./components/admin/AdminLayout";
import AdminProject from "./components/admin/AdminProject";
import AdminContact from "./components/admin/AdminContact";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
<Route path="/admin" element={<AdminLayout />}>
         <Route path="contacts" element={<AdminContact />} />
        <Route path="projects" element={<AdminProject />} /> 
</Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
