import React from 'react';
import {
    Card,
    Container,
    H2,
    Image,
    ImageDiv,
    ViewButton,
} from './Main.styles';

const Main = ({ data }) => {
    return (
        <Container>
            {data?.hits?.map((item) => {
                return (
                    <Card>
                        {/* <Image src={item.recipe.image} /> */}

                        <ImageDiv bgUrl={item.recipe.image}></ImageDiv>

                        <H2>{item.recipe.label}</H2>

                        <ViewButton>View Recipe</ViewButton>
                    </Card>
                );
            })}
        </Container>
    );
};

export default Main;
