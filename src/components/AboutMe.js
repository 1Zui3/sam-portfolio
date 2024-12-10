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
<<<<<<< HEAD
        Hello! I am Samuel B. Balagtas and i am a passionate developer with expertise in React and modern web technologies. I enjoy creating visually appealing and user-friendly web applications.
=======
        Hello! I am Samuel B. Balagtas and i am a passionate developer with expertise in React and modern web technologies and i enjoy creating user-friendly websites.
>>>>>>> 6ec175e343671269e5162a52ff1d870e9848d7ee
      </p>
    </section>
  );
}

export default AboutMe;
