import ProjectCard from "../components/ProjectCard";
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
    <section className="projects">
      {" "}
      <h2 className="my-projects">
        My <span className="highlight">Projects</span>
      </h2>{" "}
      <div className="projects-grid">
        {" "}
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}{" "}
      </div>{" "}
    </section>
  );
};
export default Projects;
