import "../Styles/SkillCard.css";
const SkillCard = ({ skill }) => {
  return (
<div className="card-holder">
    <div className="skill-card">
      <img src={skill.icon} className="skill-icon"/>
      <div className="skill-name">{skill.name}</div>
    </div>
    </div>
  );
};
export default SkillCard;
