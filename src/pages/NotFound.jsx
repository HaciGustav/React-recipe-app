import React from 'react';
import { PageCenter } from '../styles/PageCenter.styles';
import gif from '../img/NotFound.gif';
import { Button } from '../styles/Inputs.styles';
import { useNavigate } from 'react-router';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <PageCenter col bgColor={'darkred'}>
            <h1>Sorry you are at the wrong page!! </h1>
            <br />
            <img src={gif} alt="" />
            <br />
            <Button onClick={() => navigate(-1)}>Go Back</Button>
        </PageCenter>
    );
};

export default NotFound;
