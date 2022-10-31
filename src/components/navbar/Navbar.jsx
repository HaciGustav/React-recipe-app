import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Li, Logo, Nav, Ul } from './Navbar.styled';

const Navbar = ({ handleLogout }) => {
    const navigate = useNavigate();
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
                    <Link
                        to="/"
                        onClick={() => {
                            navigate('/');
                            handleLogout();
                        }}>
                        Logout
                    </Link>
                </Li>
            </Ul>
        </Nav>
    );
};

export default Navbar;
