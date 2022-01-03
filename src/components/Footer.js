import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <section id="footer">
            <Container fluid>
                <Row>
                    <Col className='footer p-5 d-flex justify-content-end align-items-center'>
                        <a href="#header">
                            <ion-icon name="arrow-up-circle-outline"></ion-icon>
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer
