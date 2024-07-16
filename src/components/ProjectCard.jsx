import "../Styles/ProjectCard.css";
const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      {" "}
      <img
        src={project.image}
        alt={project.title}
        className="project-image"
      />{" "}
      <div className="project-title">{project.title}</div>{" "}
    </div>
  );
};
export default ProjectCard;
