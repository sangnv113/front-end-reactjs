import React from "react";
import { Navbar, NavbarBrand, Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <div className="fixed-bottom">
                <Navbar color="dark" dark>
                    <Container>
                        <NavbarBrand>Footer</NavbarBrand>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
}

export default Footer;