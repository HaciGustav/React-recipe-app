import React from 'react';
import { FlexColumn } from '../../styles/Containers.styles';
import Form from './Form';

const Header = () => {
    return (
        <header style={{ backgroundColor: '#FF5A33', padding: '2rem 0' }}>
            <FlexColumn>
                <h1>Food Search</h1>
                <Form />
            </FlexColumn>
        </header>
    );
};

export default Header;
