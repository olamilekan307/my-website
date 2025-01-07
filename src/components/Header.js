import React, { useState, useEffect } from "react";
import './Header.css';  // Make sure your styles are properly linked
import myPhoto from '../assets/images/shittu2.jpg'; // Import the image (adjust the path if needed)

const Header = () => {
  // Array of phrases to be displayed
  const phrases = [  
    "a passionate software developer",
    "an experienced frontend developer",
    "a React.js enthusiast",
    "a problem solver"
  ];

  const [currentPhrase, setCurrentPhrase] = useState(0); // Current phrase index
  const [cycleCount, setCycleCount] = useState(0); // Number of completed cycles

  // Change phrase every 3 seconds (3000 milliseconds)
  useEffect(() => {
    // Stop the cycle after 2 full cycles
    if (cycleCount >= 2 && currentPhrase === 0) return;

    const interval = setInterval(() => {
      // Update phrase index
      setCurrentPhrase((prevPhrase) => {
        const nextPhrase = (prevPhrase + 1) % phrases.length;
        if (nextPhrase === 0) {
          // Increment cycle count when we reach the first phrase again
          setCycleCount((prevCount) => prevCount + 1);
        }
        return nextPhrase;
      });
    }, 3000); // Change phrase every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentPhrase, cycleCount, phrases.length]);

  return (
    <header className="header">
      <div className="logo">
        {/* Add the image on the left side */}
        
        <div>
          <h1 className="name">Hi, I'am</h1>
          <h1 className="name">Abubakry Olamilekan</h1>
          {/* Display the dynamic phrase here with sliding animation */}
          <h2 key={currentPhrase} className="phrase">
            {phrases[currentPhrase]}
          </h2>
        </div>
        <img src={myPhoto} alt="Your Name" className="profile-image" />
      </div>
      <div className="logo-mobile">
        {/* Add the image on the left side */}
        <img src={myPhoto} alt="Your Name" className="profile-image" />
        <div>
          <h1 className="name">Hi, I'am</h1>
          <h1 className="name">Abubakry Olamilekan</h1>
          {/* Display the dynamic phrase here with sliding animation */}
          <h2 key={currentPhrase} className="phrase">
            {phrases[currentPhrase]}
          </h2>
        </div>
      </div>
      <nav>
        {/* <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul> */}
      </nav>
    </header>
  );
};

export default Header;
