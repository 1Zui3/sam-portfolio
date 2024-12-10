import React from "react";

// Corrected imports with proper relative paths
import htmlLogo from "../assets/html-logo.png";
import cssLogo from "../assets/css-logo.png";
import jsLogo from "../assets/js-logo.png";
import reactLogo from "../assets/react.png";
import cLogo from "../assets/c-logo.png";
import cppLogo from "../assets/cpp-logo.png";
import pythonLogo from "../assets/python-logo.png";
import nodeLogo from "../assets/node-logo.png";
import mysqlLogo from "../assets/mysql-logo.png";
import mongoLogo from "../assets/mongo-logo.png";
import postgresqlLogo from "../assets/postgresql-logo.png";

function Skills() {
  const skills = [
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "React", logo: reactLogo },
    { name: "C", logo: cLogo },
    { name: "C++", logo: cppLogo },
    { name: "Python", logo: pythonLogo },
    { name: "Node.js", logo: nodeLogo },
    { name: "MySQL", logo: mysqlLogo },
    { name: "MongoDB", logo: mongoLogo },
    { name: "PostgreSQL", logo: postgresqlLogo },
  ];

  return (
    <section id="skills" style={{ padding: "40px 20px", backgroundColor: "#f7f7f7" }}>
      <h2 style={{ fontSize: "32px", marginBottom: "20px", textAlign: "center" }}>My Technical Skills</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#ffffff",
              padding: "10px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flex: "1 1 calc(33.333% - 20px)", // Adjust to make 3 items per row in large view
              boxSizing: "border-box",
              marginBottom: "20px", // Spacing between rows
            }}
          >
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              style={{ width: "40px", height: "40px", objectFit: "contain" }}
            />
            <span style={{ fontSize: "18px", color: "#333" }}>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
