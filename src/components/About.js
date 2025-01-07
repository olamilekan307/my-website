import React from "react";
// Optional: Importing icons (if you choose to use React Icons)
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        
        <img src={require('../assets/images/about.jpg')}  alt="Your Name" className="about-image" />
        <div className="about-text">
          <p>
            I'm a passionate software developer with experience in building
            full-stack web applications. I specialize in front-end development
            using React and have experience with back-end technologies like Node.js.
          </p>
          <h3>Technologies I Work With:</h3>
          <ul className="technologies-list">
            <li>
              <FaReact /> React.js | <FaNodeJs /> Node.js | <FaCss3Alt /> HTML/CSS | <FaHtml5 /> JavaScript |{" "}
              <DiMongodb /> MongoDB
            </li>
          </ul>
          <ul className="tech-mobile">
            <li>
              <FaReact /> <span className="tech-text">React.js</span> | 
              <FaNodeJs /> <span className="tech-text">Node.js</span> | 
              <FaCss3Alt /> <span className="tech-text">HTML/CSS</span> | 
              <FaHtml5 /> <span className="tech-text">JavaScript</span> | 
              <DiMongodb /> <span className="tech-text">MongoDB</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
