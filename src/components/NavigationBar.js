import React from 'react'

import { Nav, Container } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'

function NavigationBar() {
    return (
        <Navbar expand="md" className=' pt-4'>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='p-0 mx-auto'>
                    <ion-icon name="menu-outline"></ion-icon>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto justify-content-center gap-md-5 gap-sm-2 flex-md-row flex-column text-center mx-auto">
                    <Nav.Link href="#experience">EXPERIENCE</Nav.Link>
                    <Nav.Link href="#projects">WORKS</Nav.Link>
                    <Nav.Link href="#contact">CONTACT</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar
