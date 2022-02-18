import React from 'react'
import { Navbar,Nav,Container,NavbarBrand } from 'react-bootstrap'

export const NavigationBar = () => {
    return(
        <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark' style={{backgroundColor: "#071740", position: "sticky"}}>
            <Container>
                <NavbarBrand href='/'>Gagan Mani</NavbarBrand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/Projects'>Projects</Nav.Link>
                        <Nav.Link href='/Hobbies'>Hobbies</Nav.Link>
                        <Nav.Link href='/Mentorship'>Mentorship</Nav.Link>
                        <Nav.Link href='/Contact'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

