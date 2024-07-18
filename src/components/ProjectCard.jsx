import PropTypes from "prop-types";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <h4>{project.title}</h4>
      <div className="project-links">
        <a href={project.viewCode} className="project-link">
          VIEW CODE
        </a>
        <a href={project.viewLive} className="project-link">
          VIEW LIVE
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    viewCode: PropTypes.string.isRequired,
    viewLive: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
