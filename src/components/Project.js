import React from "react";
import { Row, Col } from "react-bootstrap";

function Project({ project }) {
  return (
    <Row className="justify-content-end" key={project.id}>
      <Col
        md={4}
        className="project-details d-flex flex-column justify-content-center"
      >
        <h3 className="title">{project.name}</h3>
        <p className="tags d-flex gap-3">
          {project.tags.map((tag, index) => {
            return (
              <span className="px-3 py-2" key={index}>
                {tag}
              </span>
            );
          })}
        </p>
        <ul className="project-links d-flex gap-5 mt-lg-5 mt-2">
          <li className="repo-link">
            <a href={project.repoLink} className="d-flex align-items-center">
              VIEW REPO
              <ion-icon name="chevron-forward"></ion-icon>
            </a>
          </li>
          <li className="site-link">
            <a href={project.siteLink} className="d-flex align-items-center">
              VIEW SITE
              <ion-icon name="chevron-forward"></ion-icon>
            </a>
          </li>
        </ul>
      </Col>
      <Col md={6} className="project-image p-0 bg-secondary shadow">
        <img src={project.image} alt="" className="img-fluid w-100" />
      </Col>
    </Row>
  );
}

export default Project;
