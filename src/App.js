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

      {/* Contact Me Section */}
      <section id="contact" className="contact">
        <h2>Contact me</h2>
        <div className="contact-links">
          <a
            href="https://www.facebook.com/sam.101301/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/in/samuel-balagtas-4092b8243/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            LinkedIn
          </a>
        </div>
        <p className="email">Gmail: balagtassamuel1@gmail.com</p>
      </section>
    </div>
  );
}

export default App;
