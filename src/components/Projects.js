// src/components/Projects.js
import React from "react";
import './Header.css'; 

const Projects = () => {
  const projects = [
    {
      name: "Project One",
      description: "A cloned website using HTML and CSS",
      link: "https://github.com/olamilekan307/myProjects.Ola"
    },
    {
      name: "Project Two",
      description: "A website that shows how to book an appointment with available doctors using HTML, CSS and Javascript.",
      link: "https://github.com/olamilekan307/groupProject"
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
