import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { FlexColumn, FlexRow } from '../../styles/Containers.styles';
import { BackButton } from '../../styles/Inputs.styles';
import {
    Container,
    ContentDiv,
    H2,
    Image,
    Ingredients,
    LabelsDiv,
    Li,
    P,
    Span,
} from './Detail.styled';

const Details = () => {
    const navigate = useNavigate();
    const { state } = useLocation();

    const {
        cuisineType,
        ingredients,
        ingredientLines,
        healthLabels,
        label,
        image,
        dishType,
        mealType,
    } = state.recipe;

    return (
        <>
            <Container>
                <ContentDiv>
                    <LabelsDiv>
                        {healthLabels
                            .slice(0, healthLabels.length / 2)
                            ?.map((label, i) => (
                                <Span key={i}>{label} ✔</Span>
                            ))}
                    </LabelsDiv>
                    <LabelsDiv>
                        {healthLabels
                            .slice(healthLabels.length / 2, healthLabels.length)
                            ?.map((label, i) => (
                                <Span key={i}>{label} ✔</Span>
                            ))}
                    </LabelsDiv>
                    <Image src={image} />

                    <H2>{label}</H2>
                    <P>
                        {cuisineType[0].toUpperCase()} ♦{' '}
                        {dishType[0].toUpperCase()} ♦{' '}
                        {mealType[0].toUpperCase()}{' '}
                    </P>
                    <Ingredients>
                        <ul>
                            {ingredientLines.map((item, i) => {
                                return <Li key={i}>⚜ {item}</Li>;
                            })}
                        </ul>
                    </Ingredients>
                </ContentDiv>
            </Container>
            <BackButton onClick={() => navigate(-1)}>⬅</BackButton>
        </>
    );
};

export default Details;
