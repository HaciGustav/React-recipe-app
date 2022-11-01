import styled from 'styled-components';

export const Nav = styled.nav`
    background-color: #590202;
    display: flex;
    justify-content: space-between;
`;

export const Logo = styled.span`
    /* border: 2px solid red; */
    font-size: 2rem;
    font-weight: 600;
    /* height: 3rem; */
    padding: 0.3rem;
    min-width: 5rem;
    font-family: 'Great Vibes', cursive;
    cursor: pointer;
    @media (max-width: 400px) {
        font-size: 1.5rem;
    }
`;

export const Ul = styled.ul`
    display: flex;
    column-gap: 10px;
    align-items: center;
    list-style-type: none;
    padding-right: 2rem;
    @media (max-width: 400px) {
        column-gap: 2px;
    }
`;

export const Li = styled.li`
    font-size: 1.3rem;
    font-weight: 600;

    &:hover {
        border-bottom: 4px solid #634a00;
    }
    @media (max-width: 460px) {
        font-size: 1rem;
    }
`;
