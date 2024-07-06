import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Footer from "../components/Footer"

function HomePage() {
  return (
    <div>
      <About />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}

export default HomePage;
