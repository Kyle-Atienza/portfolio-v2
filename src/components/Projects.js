import React from 'react'

import project1 from "../assets/projects/rest-countries-api.png"
import project2 from "../assets/projects/tip-calculator.png"
import project3 from "../assets/projects/url-shortener.png"

import { Container, Row, Col, Button } from 'react-bootstrap'

function Projects() {
    return (
        <section id="projects">
            <Container className='position-relative d-flex flex-column gap-5'>
                <p className="overlay-title">Works</p>
                <Row className='justify-content-end'>
                    <Col md={4} className='project-details d-flex flex-column justify-content-center'>
                        <h3 className='title'>Rest Countries API</h3>
                        <p className="tags d-flex gap-3">
                            <span className='px-3 py-2'>React</span>
                            <span className='px-3 py-2'>Bootstrap</span>
                        </p>
                        <ul className='project-links d-flex gap-5 mt-lg-5 mt-2'>
                            <li className="repo-link">
                                <a href="https://github.com/Kyle-Atienza/rest-countries-api" className='d-flex align-items-center'>
                                    VIEW REPO
                                    <ion-icon name="chevron-forward"></ion-icon>
                                </a>
                            </li>
                            <li className="site-link">
                                <a href="https://rest-countries-api-fem.netlify.app/" className='d-flex align-items-center'>
                                    VIEW SITE
                                    <ion-icon name="chevron-forward"></ion-icon>
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={6} className='project-image p-0 bg-secondary shadow'>
                        <img src={project1} alt="" className='img-fluid w-100'/>
                    </Col>
                </Row>
                <Row className='justify-content-end'>
                    <Col md={4} className='project-details d-flex flex-column justify-content-center'>
                        <h3 className='title'>Tip Calculator</h3>
                        <p className="tags d-flex gap-3">
                            <span className='px-3 py-2'>JavaScript</span>
                            <span className='px-3 py-2'>Sass</span>
                        </p>
                        <ul className='project-links d-flex gap-5 mt-lg-5 mt-2'>
                            <li className="repo-link">
                                <a href="https://github.com/Kyle-Atienza/Tip-Calculator" className='d-flex align-items-center'>
                                    VIEW REPO
                                    <ion-icon name="chevron-forward"></ion-icon>
                                </a>
                            </li>
                            <li className="site-link">
                                <a href="https://kyle-atienza.github.io/Tip-Calculator/" className='d-flex align-items-center'>
                                    VIEW SITE
                                    <ion-icon name="chevron-forward"></ion-icon>
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={6} className='project-image p-0 bg-secondary shadow'>
                        <img src={project2} alt="" className='img-fluid  w-100'/>
                    </Col>
                </Row>
                <Row className='justify-content-end'>
                    <Col md={4} className='project-details d-flex flex-column justify-content-center'>
                        <h3 className='title'>URL Shortener</h3>
                        <p className="tags d-flex gap-3">
                            <span className='px-3 py-2'>JavaScript</span>
                            <span className='px-3 py-2'>API</span>
                        </p>
                        <ul className='project-links d-flex gap-5 mt-lg-5 mt-2'>
                            <li className="repo-link">
                                <a href="https://github.com/Kyle-Atienza/URL-Shorterner-API-Master" className='d-flex align-items-center'>
                                    VIEW REPO
                                    <ion-icon name="chevron-forward"></ion-icon>
                                </a>
                            </li>
                            <li className="site-link">
                                <a href="https://kyle-fem-shorten-url.netlify.app/" className='d-flex align-items-center'>
                                    VIEW SITE
                                    <ion-icon name="chevron-forward"></ion-icon>
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={6} className='project-image p-0 bg-secondary shadow'>
                        <img src={project3} alt="" className='img-fluid  w-100'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Button className='d-flex align-items-center mx-auto mt-5' id='githubButton' href='https://github.com/Kyle-Atienza'>
                        View Github
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                    </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects
