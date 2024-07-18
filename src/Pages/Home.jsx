import About from "../components/About";
// import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../Styles/Home.css"
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";

function HomePage() {
  return (
    <div>
      <Navbar/>
      <About />
      <Skills/>
      <AboutMe/>
      <Projects />
      {/* {/* <Contact /> } */}
   <Footer/>
 
    </div>
  );
}

export default HomePage;
