import React from 'react';
import { Li, Logo, Nav, Ul } from './Navbar.styled';

const Navbar = () => {
    return (
        <Nav>
            <Logo />
            <Ul>
                <Li>Home</Li>
                <Li>About</Li>
                <Li>Github</Li>
                <Li>Logout</Li>
            </Ul>
        </Nav>
    );
};

export default Navbar;
