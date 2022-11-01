import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Main from '../../components/main/Main';

import PacmanLoader from 'react-spinners/PacmanLoader';

import { LoadingWrapper } from '../../components/main/Main.styles';

const Home = ({ setLoading, loading }) => {
    const [formValues, setFormValues] = useState({
        mealType: 'breakfast',
        query: '',
    });
    const [data, setData] = useState({});

    const getValues = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };
    const fetchData = async (formValues) => {
        setLoading(true);
        const apiKey = 'b7cf878e2917992672b093d529cd879d';
        const apiId = 'a685f529';
        const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${formValues.query}&app_id=${apiId}&app_key=${apiKey}&mealType=${formValues.mealType}`;
        await axios(url).then((res) => {
            setData(res.data);
        });
        setLoading(false);
    };

    return (
        <>
            <Header
                getValues={getValues}
                fetchData={fetchData}
                formValues={formValues}
            />
            {loading ? (
                <LoadingWrapper>
                    <PacmanLoader
                        color="#f28705"
                        speedMultiplier={3}
                        size={50}
                        margin-top="15px"
                    />
                </LoadingWrapper>
            ) : (
                <Main formValues={formValues} data={data} />
            )}
            <Footer />
        </>
    );
};

export default Home;
