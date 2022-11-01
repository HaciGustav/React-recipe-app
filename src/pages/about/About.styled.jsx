import styled from 'styled-components';

export const BgDiv = styled.div`
    background-image: url(${({ bgImg }) => bgImg && './img/about-bgImg.jpg'});
    background-position: center;
    background-size: cover;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -10;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Container = styled.div`
    background-color: #000;
    opacity: 0.8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem;
    width: 95%;
    height: 95%;
    margin: auto;
    color: #fff;
`;
export const P = styled.p`
    text-align: center;
    word-wrap: break-word;
    font-size: 1.5rem;
`;
