import React from "react";

import { Container, Row, Col, Button, Nav } from "react-bootstrap";

import portrait from "../assets/portrait.png";
import name from "../assets/name.svg";
import portraitMobile from "../assets/portrait-mobile.png";

function Hero() {
  return (
    <Container className="d-sm-block d-flex" id="hero">
      <Row className="position-relative flex-grow-1">
        <Col xs={7} className="header-image d-sm-block d-none">
          <img src={portrait} className="" alt="" />
        </Col>
        <Col
          xs={12}
          className="d-sm-none d-block mobile-header-image px-0 py-5 d-flex align-items-center justify-content-center"
        >
          <img src={portraitMobile} alt="" className="" />
        </Col>
        <Col md={8} xs={12} className="header-text translate-middle-y end-0">
          <p className="text-md-start text-center">Hi I'm</p>
          <img src={name} className="header-name w-100" alt="" />
          <p className="text-md-end text-center ms-sm-auto">
            A creative web developer with a strong background in design and
            coding, I have a passion for creating visually appealing and
            user-friendly websites. With experience in a variety of programming
            languages and frameworks.
          </p>
          <Button
            className="d-flex align-items-center mt-sm-5 mt-3 ms-sm-auto me-sm-0 ms-auto me-auto"
            id="resumeButton"
            href="https://drive.google.com/file/d/1rVXjl6vMF5Sgb1uSmufsatqjt2hMFh3c/view?usp=sharing"
          >
            View Resume
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </Button>
        </Col>
        <Col xs={1} className="socials mb-lg-0 mb-sm-5">
          <Nav className="gap-sm-5 gap-3">
            <Nav.Item>
              <Nav.Link href="https://www.linkedin.com/in/kyle-atienza-70b60b194/">
                <ion-icon name="logo-linkedin"></ion-icon>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://twitter.com/AtienzaKyle">
                <ion-icon name="logo-twitter"></ion-icon>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://github.com/Kyle-Atienza">
                <ion-icon name="logo-github"></ion-icon>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
