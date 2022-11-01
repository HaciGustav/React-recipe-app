import React from 'react';
import { useNavigate } from 'react-router';

import { BackButton } from '../../styles/Inputs.styles';
import { BgDiv, Container, P } from './About.styled';

const About = () => {
    const navigate = useNavigate();
    return (
        <>
            <BgDiv bgImg>
                <Container>
                    <h1>Hi I'm Mehmet</h1>
                    <P>
                        I'm currently learning Full-Stack Development Languages.
                        And this is my first multipage React App. In this
                        project I've used 👇
                    </P>
                    <ul>
                        <li>React-Router-Dom</li>
                        <li>React-Spinner</li>
                        <li>Styled-Components</li>
                        <li>Axios</li>
                    </ul>

                    <P>
                        I've already made some projects with Pure CSS, Vanilla
                        JavaScript and JQuery etc... if you want to check my
                        other projects, you can click on the GitHub link on
                        Navbar.
                    </P>
                </Container>
            </BgDiv>
            <BackButton onClick={() => navigate(-1)}>⬅</BackButton>
        </>
    );
};

export default About;
