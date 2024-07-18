import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../Styles/Projects.css';

// Sample project data
const projects = [
  {
    title: 'Netflix clone',
    image: 'images/Frame 5 (3).png',
    viewCode: 'https://github.com/Bomagift/Netflix-clone-learnable-task',
    viewLive: 'https://netflix-clone-learnable-task.vercel.app/'
  },
  {
    title: 'SkillHub LMS',
    image: 'images/image 3.png',
    viewCode: 'https://github.com/GenesysLearnable/LMS-A-FE-1',
    viewLive: 'https://skillhub-learn.netlify.app/'
  },
  {
    title: 'Whisper App',
    image: 'images/Frame 5 (1).png',
    viewCode: 'https://github.com/jaminhood/Whisper',
    viewLive: ' https://whisper-app-three.vercel.app/'
  },
  {
    title: 'To-Do list',
    image: 'images/image 4.png',
    viewCode: 'https://github.com/Bomagift/LEARNABLE-TO-DO-LIST',
    viewLive: 'https://learnable-to-do-list.vercel.app/'
  },
  {
    title: 'Student Grading System',
    image: 'images/Frame 5 (2).png',
    viewCode: 'https://github.com/Bomagift/students-bio',
    viewLive: 'https://students-bio.vercel.app/'
  },
  {
    title: 'TourAfric',
    image: 'images/image 5 (1).png',
    viewCode: 'https://github.com/Daniel7303/TourAfric',
    viewLive: 'https://trav-page-g5.vercel.app/'
  }
];

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-header">
        <h2 className="my-projects">My Projects</h2>
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
