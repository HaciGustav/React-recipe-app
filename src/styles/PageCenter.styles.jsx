import styled from 'styled-components';

export const PageCenter = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: ${({ col }) => col && 'column'};
    align-items: center;
    justify-content: center;
    background: ${({ bgColor }) => bgColor && bgColor};
    background-image: url(${({ bgImg }) => bgImg && bgImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;
