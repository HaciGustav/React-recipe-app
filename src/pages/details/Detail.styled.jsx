import styled from 'styled-components';

export const H2 = styled.h2`
    text-align: center;

    padding: 1rem;
    background-color: #000000ce;
    color: beige;
    /* width: 90%; */
    margin-inline: auto;
    @media (max-width: 500px) {
        padding-top: 3rem;
    }
    @media (max-width: 350px) {
        padding-top: 9rem;
    }
`;
export const P = styled.p`
    text-align: center;
    padding: 0.5rem;
    background-color: #000000ce;
    color: beige;
    /* width: 90%; */
    margin-inline: auto;
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    transition: all 0.2s;
    &:hover {
        transform: scale(2);
        border: 1px solid lightblue;
        text-align: center;
        padding: 0.2rem;
        font-weight: 600;
        z-index: 9999;
        border-radius: 10px;
        position: relative;
        right: 0;
    }
`;
export const Image = styled.img`
    border-radius: 1rem;
    width: 25%;
    min-width: 15rem;
    margin: 1rem 0;
`;
export const ContentDiv = styled.div`
    padding: 1rem 0.5rem;

    width: 75%;
    margin-inline: auto;
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: center;
    column-gap: 2rem;
    background-color: #000000ce;
    color: white;
`;
export const LabelsDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.2rem;
    border-right: 4px dashed beige;
    color: beige;
`;
export const Ingredients = styled.div`
    align-self: center;
`;
export const Li = styled.li`
    word-wrap: break-word;
    list-style-type: none;
`;
export const Ul = styled.ul`
    row-gap: 0.3rem;
`;
