import React from 'react';
import { FlexRow } from '../../styles/Containers.styles';
import {
    Button,
    Input,
    Option,
    SearchButton,
    Select,
} from '../../styles/Inputs.styles';

const Form = () => {
    return (
        <form>
            <FlexRow>
                <Input type="text" />
                <SearchButton>Search</SearchButton>
                <Select>
                    <Option value="Breakfast">Breakfast</Option>
                    <Option value="Brunch">Brunch</Option>
                    <Option value="Lunch/Diner">Lunch/Diner</Option>
                    <Option value="Snack">Snack</Option>
                    <Option value="Teatime">Teatime</Option>
                </Select>
            </FlexRow>
        </form>
    );
};

export default Form;
