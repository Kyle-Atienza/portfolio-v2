import React from "react";
import { Col } from "react-bootstrap";

function Experience({ experience }) {
  return (
    <Col
      md={7}
      xs={12}
      className="work-experience position-relative pb-5"
      key={experience.id}
    >
      <h3 className="title">{experience.name}</h3>
      <p>{experience.position}</p>
      <p>{`${experience.start} - ${experience.end ? experience.end : 'Ongoing'}`}</p>
      <ul className="experiences">
        {experience.description
          ? experience.description.map((data, index) => {
              return <li key={index}>{data}</li>;
            })
          : null}
      </ul>
    </Col>
  );
}

export default Experience;
