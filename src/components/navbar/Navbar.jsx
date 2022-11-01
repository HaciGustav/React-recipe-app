import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Li, Logo, Nav, Ul } from './Navbar.styled';

const Navbar = ({ handleLogout }) => {
    const navigate = useNavigate();
    return (
        <Nav>
            <Logo onClick={() => navigate('/home')}>Explorateur de Saveur</Logo>
            <Ul>
                <Li>
                    <Link to="/home">Home</Link>
                </Li>
                <Li>
                    <Link to="/about">About</Link>
                </Li>
                <Li>
                    <a
                        href="https://github.com/HaciGustav"
                        style={{ color: 'black' }}>
                        Github
                    </a>
                </Li>
                <Li>
                    <Link
                        to="/"
                        onClick={() => {
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
