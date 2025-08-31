import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import arcade_games from "../../Assets/Projects/arcade_games.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arcade_games}
              isBlog={false}
              title="Arcade Games"
              description="Collection of classic and interactive games including Snake, Pong, Guess the U.S. States, and Rock Paper Scissors built with HTML, CSS, and JavaScript. Features engaging gameplay, responsive layouts, and logic-driven interactivity."
              ghLink="https://github.com/NishchalBhandariChhetri/Arcade-Games.git"
              demoLink="https://nishchalbhandarichhetri.github.io/Arcade-Games/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
