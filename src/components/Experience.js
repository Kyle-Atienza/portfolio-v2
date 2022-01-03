import { Container, Row, Col } from 'react-bootstrap'

function Experience() {
    return (
        <section id="experience">
            <Container className='position-relative'>
                <p className="overlay-title">Experience</p>
                <Row className='align-items-center flex-column'>
                    <Col md={7} xs={12} className='work-experience position-relative pb-5'>
                        <h3 className='title'>Symph</h3>
                        <p>Front-end Developer Intern</p>
                        <p>September 2021 - Present</p>
                        <ul className="experiences">
                            <li>
                            Worked on various groups of teams and helped with maintenance and development of various projects for clients and the company’s product.
                            </li>
                            <li>
                            Used Technologies such as React, Gatsby, GraphQL, Python, and JAMStack
                            </li>
                        </ul>
                    </Col>
                    <Col md={7} xs={12} className='work-experience position-relative'>
                        <h2 className='title position-relative'>My Journey Started</h2>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Experience
