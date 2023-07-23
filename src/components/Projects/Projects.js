import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/codeEditor.png";
// import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recognizable <strong className="purple">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="AR Learning App"
              description="We have created Augmented Reality Mobile App for Education, In the User can able to view the Monuments in Virtual world, User can able to render 3D monuments, We used Flutter and Dart for developing the Mobile app and We used Unity for Building the AR apk. The websites which are helpfull for developing AR application are Vuforia and SketchFab. Finally we Completed the full app which is helpful for students to learn about monuments and also experience those monuments in the virtual world.  Tech Stack : Flutter , Unity"
              ghLink="https://github.com/logesh13/Augmented_Reality_Education_App"
              demoLink="https://github.com/logesh13/Augmented_Reality_Education_App/blob/main/README.md"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Cine-Time"
              description="I have created web application for movie ticket booking system , The application is created using React JS completely .The user details and seats available are monitored using Firebase." 
              ghLink="https://github.com/logesh13/cine-time"
              demoLink="https://github.com/logesh13/cine-time/blob/main/README.md"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
