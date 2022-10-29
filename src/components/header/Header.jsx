import React from 'react';
import { FlexColumn } from '../../styles/Containers.styles';
import Navbar from '../navbar/Navbar';
import Form from './Form';

const Header = () => {
    return (
        <header
            style={{
                backgroundColor: '#FF5A33',
                padding: '2rem 0',
                paddingTop: '5rem',
            }}>
            <FlexColumn>
                <h1>Food Search</h1>
                <Form />
            </FlexColumn>
        </header>
    );
};

export default Header;
