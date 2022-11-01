import React from 'react';
import { useNavigate } from 'react-router';
import {
    Card,
    Container,
    H2,
    Image,
    ImageDiv,
    ViewButton,
} from './Main.styles';

const Main = ({ data }) => {
    const navigate = useNavigate();
    return (
        <Container>
            {data?.hits?.map((item) => {
                const { uri } = item.recipe;
                const id = uri.substring(uri.length - 8, uri.length);
                return (
                    <Card key={id}>
                        {/* <Image src={item.recipe.image} /> */}

                        <Image src={item.recipe.image}></Image>

                        <H2>{item.recipe.label}</H2>

                        <ViewButton
                            onClick={() =>
                                navigate(`/details/${id}`, {
                                    state: item,
                                })
                            }>
                            View Recipe
                        </ViewButton>
                    </Card>
                );
            })}
        </Container>
    );
};

export default Main;
