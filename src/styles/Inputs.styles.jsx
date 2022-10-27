import styled from 'styled-components';

export const Input = styled.input`
    background-color: #ddd;
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
export const SearchButton = styled(Button)`
    background-color: #ddd;
    padding: 0.5rem;
    border: 0.7px solid black;
    border-radius: 5px;
`;

export const Select = styled.select`
    background-color: #ddd;
    padding: 0.45rem;
    border: 0.7px solid black;
    border-radius: 5px;
    &:focus {
        outline: 1px solid #ccc;
    }
`;
export const Option = styled.option`
    background-color: #44803f;
    color: #fff;

    border-radius: 5rem;
    font-size: 1.1rem;
    &:hover {
        font-size: 1.2rem;
        background-color: #383416;
    }
`;
