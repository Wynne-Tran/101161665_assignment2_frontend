
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'



const Menu = () => {
    return (
        <div>       
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand >Employee Management App</Navbar.Brand>
                        <Nav className="me-auto"></Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Menu