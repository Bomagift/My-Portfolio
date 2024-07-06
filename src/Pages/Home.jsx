import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Navbar from "../components/Navbar"
import "../Styles/Home.css"

function HomePage() {
  return (
    <div>
      <Navbar/>
      <About />
      <Projects />
      <Contact />
    
    </div>
  );
}

export default HomePage;
