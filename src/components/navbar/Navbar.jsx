import React from 'react';
import { Link } from 'react-router-dom';
import { Li, Logo, Nav, Ul } from './Navbar.styled';

const Navbar = () => {
    return (
        <Nav>
            <Logo />
            <Ul>
                <Li>
                    <Link to="/home">Home</Link>
                </Li>
                <Li>
                    <Link to="/about">About</Link>
                </Li>
                <Li>
                    <Link to="#">Github</Link>
                </Li>
                <Li>
                    <Link to="/">Logout</Link>
                </Li>
            </Ul>
        </Nav>
    );
};

export default Navbar;
