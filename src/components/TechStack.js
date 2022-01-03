import React from 'react'

import htmlLogo from "../assets/carousel/html.png"
import cssLogo from "../assets/carousel/css.png"
import jsLogo from "../assets/carousel/js.png"
import bootstrapLogo from "../assets/carousel/bootstrap.png"
import jqueryLogo from "../assets/carousel/jquery.png"
import reactLogo from "../assets/carousel/react.png"
import graphqlLogo from "../assets/carousel/graphql.png"
import sassLogo from "../assets/carousel/sass.png"
import gatsbyLogo from "../assets/carousel/gatsby.png"

import { Container, Row, Col } from 'react-bootstrap'

function TechStack() {
    return (
        <section id="techStack">
            <Container>
                <Row>
                    <Col>
                        <ul className="tech-stack-icons">
                            <li className='tech-stack-icon'>
                                <img src={htmlLogo} alt="" />
                            </li>
                            <li className="tech-stack-icon">
                                <img src={cssLogo} alt="" />
                            </li>
                            <li className="tech-stack-icon">
                                <img src={jsLogo} alt="" />
                            </li>
                            <li className="tech-stack-icon">
                                <img src={bootstrapLogo} alt="" />
                            </li>
                            <li className="tech-stack-icon">
                                <img src={jqueryLogo} alt="" />
                            </li>
                            <li className="tech-stack-icon">
                                <img src={reactLogo} alt="" />
                            </li>
                            <li className="tech-stack-icon">
                                <img src={graphqlLogo} alt="" />
                            </li>
                            <li className="tech-stack-icon">
                                <img src={sassLogo} alt="" />
                            </li>
                            <li className="tech-stack-icon">
                                <img src={gatsbyLogo} alt="" />
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default TechStack
