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
                            <LinkContainer to="/prayer_times">
                                <Nav.Link>Prayer times</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/blog">
                                <Nav.Link disabled>Blog</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/contact">
                                <Nav.Link>Contact</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header