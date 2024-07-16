import "../Styles/Skills.css";
import SkillCard from "../components/SkillCard";
const skills = [
  { name: "JavaScript", icon: "🔨" },
  { name: "CSS", icon: "🎨" },
  { name: "Git", icon: "🔗" },
  { name: "React", icon: "⚛️" },
];
const Skills = () => {
  return (
    <section className="skills">
      {" "}
      <div className="skills-header">
        {" "}
        <h2 className="my-skills">
          {" "}
          My <span className="highlight">Skills</span>{" "}
        </h2>{" "}
      </div>{" "}
      <h3>Proficient in These Skills</h3>{" "}
      <div className="skills-grid">
        {" "}
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}{" "}
      </div>{" "}
    </section>
  );
};
export default Skills;
