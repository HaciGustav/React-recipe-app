import React from 'react';
import { useNavigate } from 'react-router';
import { FlexColumn, FlexRow } from '../../styles/Containers.styles';
import {
    Card,
    Container,
    H2,
    Image,
    ImageDiv,
    ImageEmpty,
    ViewButton,
} from './Main.styles';

const Main = ({ data }) => {
    const navigate = useNavigate();

    return (
        <>
            {data.hits ? (
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
            ) : (
                <FlexRow>
                    <FlexColumn>
                        <ImageEmpty src="./img/ratatouille.png" />
                        <h1>Waiting for a Search!!</h1>
                    </FlexColumn>
                </FlexRow>
            )}
        </>
    );
};

export default Main;
