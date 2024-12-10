import React from "react";
import "./AboutMe.css";
import ProfileImage from "../assets/profile.jpg"; // Import your image

function AboutMe() {
  return (
    <section id="about" className="about-me">
      <div className="image-container">
        <img src={ProfileImage} alt="Profile" className="profile-image" />
      </div>
      <h2>About Me</h2>
      <p>
        Hello! I am Samuel B. Balagtas and i am a passionate developer with expertise in React and modern web technologies and i enjoy creating user-friendly websites.
      </p>
    </section>
  );
}

export default AboutMe;
