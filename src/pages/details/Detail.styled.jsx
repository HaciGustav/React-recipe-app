import styled from 'styled-components';

export const H2 = styled.h2`
    text-align: center;

    color: beige;

    margin-inline: auto;
`;
export const P = styled.p`
    text-align: center;
    font-size: 1rem;
    padding: 0.5rem;

    color: beige;

    margin-inline: auto;
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('/img/details-bg.jpg');
    background-position: center;
    background-size: cover;
    font-size: 1.2rem;
    position: absolute;
    top: 2rem;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;
export const Span = styled.span`
    font-size: 0.7rem;
    padding-top: 0.2rem;
    padding-inline: 0.3rem;
    transition: all 0.1s;
    border-right: 2px solid beige;
    &:hover {
        transform: scale(2);
        border-inline: 1px solid lightblue;
        background-color: black;
        text-align: center;
        padding: 0.2rem;
        font-weight: 600;
        z-index: 9999;

        position: relative;
        right: 0;
    }
`;
export const Image = styled.img`
    border-radius: 1rem;

    min-width: 15rem;
    margin-bottom: 1rem;
`;
export const ContentDiv = styled.div`
    padding: 1rem 0.5rem;

    margin-inline: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    row-gap: 0.5rem;
    background-color: #000000ce;
    color: white;
`;
export const LabelsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0.2rem;

    color: beige;
`;
export const Ingredients = styled.div`
    align-self: center;
    text-align: center;
`;
export const Li = styled.li`
    word-wrap: break-word;
    list-style-type: none;
`;
export const Ul = styled.ul`
    row-gap: 0.3rem;
`;
