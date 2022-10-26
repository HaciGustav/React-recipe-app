import styled from 'styled-components';

export const Input = styled.input`
    background-color: #eee;
    padding: 0.5rem;
    border: 0.7px solid black;
    border-radius: 5px;
    &:focus {
        outline: 1px solid #ccc;
    }
`;
export const Button = styled.button`
    background-color: #eee;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    &:active {
        transform: scale(0.95);
    }
`;
