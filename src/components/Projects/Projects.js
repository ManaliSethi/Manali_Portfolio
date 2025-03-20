import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import MemberShipApp from "../../Assets/Projects/membership.png";

import bitsOfCode from "../../Assets/Projects/jc_logo_v2.svg";
import bharatPetroleum from "../../Assets/Projects/Bharatgas_Logo.svg"
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
              imgPath={MemberShipApp}
              isBlog={false}
              title="MemberShipApp"
              description="A membership app simplified for adding members. Built with Express.js for handling HTTP requests and Handlebars for templating views. Features a straightforward API contract:
              Add a new member to the team with minimal friction & Retrieve a list of current team members for easy management.
              Enhances team collaboration effortlessly. Stay tuned for more updates!"
              ghLink="https://github.com/ManaliSethi/membersassignment"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Jiocinema"
              description="Excited to share my recent work on the JioCinema streaming platform! I developed robust profile management features, implemented a secure OTP module for user authentication, and integrated LaunchDarkly for efficient feature flag and configuration management on the backend. This project has been a fantastic opportunity to enhance user engagement and platform reliability. Stay tuned for more updates!
"
              demoLink="https://www.jiocinema.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bharatPetroleum}
              isBlog={false}
              title="Bharat Petroleum"
              description=" Contributed to the development of the Hello BPCL web portal, enabling seamless gas cylinder booking and e-KYC verification for different user personas, including customers, distributors, staff, and mechanics. Implemented OTP verification and user authentication features to enhance security and user experience on the platform.Stay tuned for more updates!"
              demoLink="https://qa.lpgnxt.bpcl.in/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
