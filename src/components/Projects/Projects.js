import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import CollegePdf from "../../Assets/Projects/CollegePdf.jpg";
import Latecomers from "../../Assets/Projects/LateComers.jpg";
import RecipeFinder from "../../Assets/Projects/RecipeFinder.jpg";

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
              imgPath={Latecomers}
              isBlog={false}
              title="Latecomers"
              description="Tracking the Latecomers in the Colleges and Universities and send the auto messages to the Latecomers and Parents based on the number of late coming into college. Also track the visitor of the college and hostel based on their work."
              ghLink="https://github.com/abhiram22MH1A4267/LateComers-Project"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RecipeFinder}
              isBlog={false}
              title="Recipe Finder"
              description="This is a Web App which helps you to find the recipe of your favourite dish just by providing the ingredients you have at home."
              ghLink="https://github.com/abhiram22MH1A4267/Food-Recipe"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CollegePdf}
              isBlog={false}
              title="PDFUploader"
              description="A Web App which is used by the Colleges to upload the Syllabus of their respective Departments and also used by the Students to view the Syllabus of their respective Departments. Managing the Multiple department's and regulations in a single place."
              ghLink="https://github.com/abhiram22MH1A4267/PDFUploader"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
