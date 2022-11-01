import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    margin: auto;
    margin-top: 2rem;
    margin-bottom: 3rem;
    gap: 1.5rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 450px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* padding: 1rem; */
    gap: 2rem;
    border: 1px solid #173117;
    border-radius: 1rem;
    background-color: #590202;
    overflow: hidden;
    padding-bottom: 0.5rem;
    color: beige;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
        rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;
export const H2 = styled.h3`
    word-wrap: break-word;
    text-align: center;
    padding-inline: 0.3rem;
    border-right: 1px solid white;
    border-bottom: 1px solid white;
`;
export const ViewButton = styled.button`
    padding: 0.5rem 1rem;
    border-radius: 10px;
    font-size: 1.1rem;
    border: none;
    background-color: #f28705;
    &:hover {
        transform: scale(0.95);
    }
`;
export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 1rem 1rem 0 0;
    /* position: absolute; */
    top: 0;
`;
export const ImageDiv = styled.div`
    width: 100%;
    height: 15rem;
    border-radius: 10px;
    background-image: url(${({ bgUrl }) => bgUrl && bgUrl});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;
