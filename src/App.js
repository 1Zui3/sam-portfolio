import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import ResumeDownload from "./components/ResumeDownload";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <section id="about">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="resume">
        <ResumeDownload />
      </section>

      {/* New Contact Me Section */}
      <section id="contact" className="contact">
<<<<<<< HEAD
        <h2>Contact Me</h2>
        <div className="contact-links">
=======
        <h2>Contact me</h2>
>>>>>>> 6ec175e343671269e5162a52ff1d870e9848d7ee
          <a
            href="https://www.linkedin.com/in/samuel-balagtas-4092b8243/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            LinkedIn
          </a>
          <span className="contact-email">
            | balagtassamuel1@gmail.com
          </span>
        </div>
      </section>
    </div>
  );
}

export default App;
