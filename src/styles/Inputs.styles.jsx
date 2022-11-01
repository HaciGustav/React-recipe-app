import styled from 'styled-components';

export const Input = styled.input`
    background-color: #ddd;
    padding: 0.5rem;
    border: 0.7px solid black;

    border-radius: 10px;
    &:focus {
        outline: 1px solid #ccc;
    }
`;
export const Button = styled.button`
    background-color: #eee;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 10px;
    &:active {
        transform: scale(0.95);
    }
`;
export const SearchButton = styled(Button)`
    background-color: #ddd;
    padding: 0.5rem;
    border: 0.7px solid black;
    border-radius: 10px;
`;

export const Select = styled.select`
    background-color: #ddd;
    padding: 0.45rem;
    border: 0.7px solid black;
    border-radius: 10px;
    &:focus {
        outline: 1px solid #ccc;
    }
`;
export const Option = styled.option`
    background-color: #44803f;
    color: #fff;
    font-size: 1.1rem;
`;
export const Form = styled.form`
    padding: 3rem;
    border: 3px solid #44803f;
    background-color: #26736590;
    border-radius: 2rem;
`;
export const BackButton = styled.button`
    border-radius: 1rem;
    border: none;
    position: fixed;
    display: flex;

    padding: 0 0.5rem;
    bottom: 1rem;
    right: 1rem;
    transition: all 0.3s;
    background-color: darkred;
    color: white;
    font-size: 1.5rem;

    &:hover {
        background-color: #fff;
        box-shadow: 0 0 60px 30px #fff, 0 0 100px 60px #f0f, 0 0 140px 90px #0ff;
        color: black;
    }
`;
