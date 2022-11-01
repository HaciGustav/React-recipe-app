import React from 'react';
import { FlexColumn } from '../../styles/Containers.styles';
import { HeaderSect } from './Header.styled';
import Navbar from '../navbar/Navbar';
import Form from './Form';

const Header = ({ getValues, fetchData, formValues }) => {
    return (
        <HeaderSect>
            <FlexColumn>
                <h1>Recipe Search</h1>
                <Form
                    getValues={getValues}
                    fetchData={fetchData}
                    formValues={formValues}
                />
            </FlexColumn>
        </HeaderSect>
    );
};

export default Header;
