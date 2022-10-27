import React from 'react';
import { Card, Container, H2, ViewButton } from './Main.styles';

const Main = () => {
    return (
        <Container>
            <Card>
                <H2>Food Name</H2>
                <ViewButton>View Recipe</ViewButton>
            </Card>
            <Card>
                <H2>Food Name</H2>
                <ViewButton>View Recipe</ViewButton>
            </Card>
        </Container>
    );
};

export default Main;
