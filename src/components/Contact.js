import React from 'react'

import { Container, Row, Col, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

function Contact() {
    return (
        <section id="contact">
            <Container>
                <p className="overlay-title">Contact</p>
                <Row>
                    <Col xs={12} sm={7}>
                        <p>Get in touch or email me directly at <a href='mailto:kylefrancisedison@gmail.com' className='mailto'>kylefrancisedison@gmail.com</a></p>
                        <Form className='d-flex flex-column gap-4' action='https://submit-form.com/MOuZjUwD'>
                            <Form.Group>
                                <Form.Control type='text' name='text' placeholder='Name' className='bg-transparent'/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type='email' name='email' placeholder='Email' className='bg-transparent'/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type='text' name='message' placeholder='Message' as="textarea" className='bg-transparent'/>
                            </Form.Group>
                            <Button className='d-flex align-items-center mt-5' id='sendButton' type='submit'>
                                Send
                                <ion-icon name="chevron-forward-outline"></ion-icon>
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact
