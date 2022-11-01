import React from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../../components/navbar/Navbar';
import { BackButton } from '../../styles/Inputs.styles';
import { BgDiv, Container } from './About.styled';

const About = () => {
    const navigate = useNavigate();
    return (
        <>
            <BgDiv bgImg>
                <Container>
                    <h1>jsdjfösldjfsldöf</h1>
                    <p>
                        söajkdflakdjsöfaljsdlkfjaödlfjlskdjflaksdjjjjjjjjjjjjjöajfsljdkfaölsdkjfsldkjfalskdfölajdöflaksdlafjölsjdlkajdsklfajösdlfjlsdjfl
                    </p>
                </Container>
            </BgDiv>
            <BackButton onClick={() => navigate(-1)}>⬅</BackButton>
        </>
    );
};

export default About;
