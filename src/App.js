import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Uses from "./pages/Uses";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import { Route, Routes } from "react-router-dom";
import NewJobWhoThis from "./pages/blog-pages/NewJobWhoThis";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/uses" element={<Uses />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/new-job-who-this" element={<NewJobWhoThis />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
