import React from "react";

import Project from "./Project";

import { Container, Row, Col, Button } from "react-bootstrap";

function Projects({ projects }) {
  return (
    <section id="projects">
      <Container className="position-relative d-flex flex-column gap-5">
        <p className="overlay-title">Works</p>
        {projects
          ? projects.map((project) => {
              return <Project project={project} key={project.id} />;
            })
          : null}
        <Row>
          <Col>
            <Button
              className="d-flex align-items-center mx-auto mt-5"
              id="githubButton"
              href="https://github.com/Kyle-Atienza"
            >
              View Github
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
