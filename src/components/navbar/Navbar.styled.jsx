import styled from 'styled-components';

export const Nav = styled.nav`
    background-color: #ffae00;
    display: flex;
    justify-content: space-between;
`;

export const Logo = styled.img`
    border: 2px solid red;
    width: 20%;
    height: 3rem;
    min-width: 10rem;
`;

export const Ul = styled.ul`
    display: flex;
    column-gap: 10px;
    align-items: center;
    list-style-type: none;
    padding-right: 2rem;
`;

export const Li = styled.li`
    font-size: 1.3rem;
    &:hover {
        border-bottom: 2px solid #634a00;
    }
`;
