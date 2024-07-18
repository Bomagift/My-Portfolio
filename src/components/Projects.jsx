import ProjectCard from "../components/ProjectCard";
import "../Styles/Projects.css"
const projects = [
  { title: "Project 1", image: "path-to-image1.jpg" },
  { title: "Project 2", image: "path-to-image2.jpg" },
  { title: "Project 3", image: "path-to-image3.jpg" },
  { title: "Project 4", image: "path-to-image4.jpg" },
  { title: "Project 5", image: "path-to-image5.jpg" },
  { title: "Project 6", image: "path-to-image6.jpg" },
];
const Projects = () => {
  return (
    <section className="Projects">
      
        <h2 className="my-skills1">
          My Projects
          </h2>
          <div className="skills-header1">
          <h3>My
          Projects</h3>
          <span className="dot1">.</span>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};
export default Projects;
