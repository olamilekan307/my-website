import React from "react";
// Importing icons from React Icons
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Connect with me:</p>
      <ul className="social-links">
        <li>
          <a
            href="https://github.com/olamilekan307"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </a>
          |
        </li>
        <li>
          <a
            href="https://linkedin.com/in/abubakry-olamilekan-shittu-663424272"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
          |
        </li>
        <li>
          <a
            href="https://twitter.com/abubakry_s8759"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter /> Twitter
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
