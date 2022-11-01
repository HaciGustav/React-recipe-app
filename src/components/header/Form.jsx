import React from 'react';
import { FlexRow } from '../../styles/Containers.styles';
import {
    Button,
    Input,
    Option,
    SearchButton,
    Select,
} from '../../styles/Inputs.styles';

const Form = ({ getValues, formValues, fetchData }) => {
    return (
        <form>
            <FlexRow>
                <Input
                    type="text"
                    onChange={(e) => getValues(e)}
                    value={formValues.query}
                    name="query"
                    placeholder="Meal Name"
                />
                <SearchButton
                    onClick={(e) => {
                        e.preventDefault();
                        fetchData(formValues);
                    }}>
                    Search
                </SearchButton>
                <Select
                    name="mealType"
                    onClick={(e) => {
                        getValues(e);
                        console.log(e.target.value);
                        console.log(e.target.name);
                    }}>
                    <Option value="Breakfast">Breakfast</Option>
                    <Option value="Brunch">Brunch</Option>
                    <Option value="Dinner">Dinner</Option>
                    <Option value="Snack">Snack</Option>
                    <Option value="Teatime">Teatime</Option>
                </Select>
            </FlexRow>
        </form>
    );
};

export default Form;
