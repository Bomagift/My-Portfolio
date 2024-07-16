import "../Styles/SkillCard.css";
const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card">
      {" "}
      <div className="skill-icon">{skill.icon}</div>{" "}
      <div className="skill-name">{skill.name}</div>{" "}
      <div className="skill-detail">Git version control</div>{" "}
    </div>
  );
};
export default SkillCard;
