import {Container, Nav, Navbar, NavbarBrand} from "react-bootstrap";
import React from "react";

export const Footer = () => {
    return (
        <div className="fixed-bottom">
            <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'
                    style={{backgroundColor: "#071740", position: "sticky"}}>
                <Container></Container>

            </Navbar>
        </div>
    )
}