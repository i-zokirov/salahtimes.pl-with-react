import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";

const Header = () => {

    return(
        <header>
            <Navbar bg='primary' variant='dark' expand="large" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand className='logo'>Salahtimes.pl</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav style={{marginLeft: "auto"}}>
                            <LinkContainer to="/daily">
                                <Nav.Link>Daily</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/monthly">
                                <Nav.Link>Monthly</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header