import "../Styles/Skills.css";
import jsIcon from "../../public/images/9035061_logo_javascript_icon 1.png"
import SkillCard from "../components/SkillCard";
const skills = [
  { name: "JavaScript",
     icon: jsIcon},
  { name: "CSS",
     icon: "images/4202020_css3_html_logo_social_social media_icon 1.png" },
  { name: "Git",
     icon: "images/Vector (24).png" },
  { name: "React",
     icon: "images/7423888_react_react native_icon 1.png" },
     { name: "Html",
      icon: "images/R-removebg-preview (1).png" },
];
const Skills = () => {
  return (
    <section className="skills">
    
      <div className="skills-header">
        <h2 className="my-skills">
          My Skills
          <span className="dot">.</span>
        </h2>
        <h3>Proficient in These Skills</h3>
      </div>
  
      <div className="skills-grid">
        
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
};
export default Skills;
