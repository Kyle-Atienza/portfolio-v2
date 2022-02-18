import { Container, Row, Col } from "react-bootstrap";
import Experience from "./Experience";

function Experiences({ experiences }) {
  return (
    <section id="experience">
      <Container className="position-relative">
        <p className="overlay-title">Experience</p>
        <Row className="align-items-center flex-column">
          {experiences
            ? experiences.map((experience) => {
                return (
                  <Experience experience={experience} key={experience.id} />
                );
              })
            : null}
          <Col md={7} xs={12} className="work-experience position-relative">
            <h2 className="title position-relative">My Journey Started</h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Experiences;
