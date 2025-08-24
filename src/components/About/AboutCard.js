import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nishchal Bhandari Chhetri </span>
            from <span className="purple"> Dallas,Texas.</span>
            <br />
            I am a undergraduate in Bachelor's of Computer Science from the University of Texas at Arlington,TX,USA.
            <br />
            With experience in Java, C++, Python, HTML, CSS, and JavaScript, I’m building a strong foundation in both front-end and back-end development. Recently, I’ve been expanding into Node.js and full-stack projects, where I focus on writing clean, efficient, and scalable code.
            <br />
            <br />
            I strive to create technology that solves meaningful problems and reaches people at scale. My focus is on growing as a developer, strengthening my ability to design reliable systems, and contributing to projects that make a real-world impact.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening to the Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to leave world more beautiful place than I found it."{" "}
          </p>
          <footer className="blockquote-footer">Nishchal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
