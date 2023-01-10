import React from "react";
import { Row, Col } from "react-bootstrap";

function Project({ project }) {
  return (
    <Row className="justify-content-end gap-col-5" key={project.id}>
      <Col
        md={5}
        className="project-details d-flex flex-column justify-content-center"
      >
        <h3 className="title">{project.name}</h3>
        {project.description?.map((paragraph) => {
          return <p className="project-description">{paragraph}</p>;
        })}
        <p className="tags d-flex gap-3 flex-wrap">
          {project.tags.map((tag, index) => {
            return (
              <span className="px-3 py-2" key={index}>
                {tag}
              </span>
            );
          })}
        </p>
        <ul className="project-links d-flex gap-5 mt-lg-5 mt-2">
          {project.repoLink ? (
            <li className="repo-link">
              <a href={project.repoLink} className="d-flex align-items-center">
                VIEW REPO
                <ion-icon name="chevron-forward"></ion-icon>
              </a>
            </li>
          ) : null}

          {project.siteLink ? (
            <li className="site-link">
              <a href={project.siteLink} className="d-flex align-items-center">
                VIEW SITE
                <ion-icon name="chevron-forward"></ion-icon>
              </a>
            </li>
          ) : null}
        </ul>
      </Col>
      <Col md={6} className="project-image p-0 bg-secondary shadow">
        <img src={project.image} alt="" className="img-fluid w-100" />
      </Col>
    </Row>
  );
}

export default Project;
