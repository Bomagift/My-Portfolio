import "../Styles/Projects.css";
const projects = [
  {
    title:" SkillHub LMS System",
    description: "A learning management system built with React.",
    liveLink: "https://skillhub-learn.netlify.app/",
    codeLink: "https://github.com/GenesysLearnable/LMS-A-FE-1",
  },
  {
    title: "Netflix Clone App",
    description: "A Netflix Clone App built with  Html and Css",
    liveLink: "https://netflix-clone-learnable-task.vercel.app/",
    codeLink: "https://github.com/Bomagift/Netflix-clone-learnable-task",
  },
  {
    title: "KitchenHub E-commerce Website",
    description: "An online store built with React.",
    liveLink: "https://kitchen-hub-ten.vercel.app/",
    codeLink: "https://github.com/Bomagift/KitchenHub",
  },

  {
    title: "Whisper App",
    description: "A platform where you can write anonymous messages.",
    liveLink: "https://whisper-app-three.vercel.app/",
    codeLink: "https://github.com/jaminhood/Whisper",
  },

  {
    title: " Bandage E-commerce Website",
    description: "An online store built with React.",
    liveLink: "https://bandage-commerce-app.vercel.app/",
    codeLink: "https://github.com/Bomagift/E-commerce",
  },


  {
    title: "TourAfric",
    description: "An online platform where you can book your travel",
    liveLink: "https://trav-page-g5.vercel.app/",
    codeLink: "https://github.com/Daniel7303/TourAfric",
  },


  {
    title: "To-Do list",
    description: "An online platform built with Html, Css and Javascript.",
    liveLink: "https://learnable-to-do-list.vercel.app/",
    codeLink: "https://github.com/username/ecommerce",
  },

{
    title: "Student Grading Website",
    description: "An online store built with React.",
    liveLink: "https://students-bio.vercel.app/",
    codeLink: "https://github.com/Bomagift/students-bio",
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
