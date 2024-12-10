import React from "react";
import "./ResumeDownload.css";

function ResumeDownload() {
  return (
    <section id="resume" className="resume-download">
      <h2>Download My Resume</h2>
      <a href="/Balagtas-Resume.pdf" download className="download-button">
        Download Resume
      </a>
    </section>
  );
}

export default ResumeDownload;
