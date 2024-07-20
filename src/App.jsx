import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
  return (
   
    <Router>
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="Aboutme" element={<AboutMe />} />
        
      </Routes>
    </Router>
  );
}
export default App;
