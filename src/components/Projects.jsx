import "../Styles/Projects.css";
const projects = [
  {
    title: "E-commerce Website",
    description: "An online store built with React and Redux.",
    liveLink: "https://example.com/ecommerce",
    codeLink: "https://github.com/username/ecommerce",
  },
  {
    title: "Portfolio Site",
    description: "My personal portfolio showcasing my work and skills.",
    liveLink: "https://example.com/portfolio",
    codeLink: "https://github.com/username/portfolio",
  },
];
const Projects = () => {
  return (
    <section id="projects">
      {" "}
      <h1>My Projects</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h2>{project.title}</h2> <p>{project.description}</p>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live
            </a>
            {project.codeLink && (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="code-link"
              >
                View Code
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Projects;
