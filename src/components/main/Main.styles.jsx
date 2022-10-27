import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    margin: auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
    gap: 1.5rem;
    display: grid;

    grid-template-columns: repeat(3, auto);
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    gap: 2rem;
`;
export const H2 = styled.h2`
    word-wrap: break-word;
`;
export const ViewButton = styled.button`
    padding: 0.5rem 1rem;
    border-radius: 10px;
    font-size: 1.1rem;
    border: none;
    background-color: #ffae00;
    &:hover {
        transform: scale(0.95);
    }
`;
