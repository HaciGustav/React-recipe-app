import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Outlet, Route, Routes } from 'react-router';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Main from '../../components/main/Main';
import Navbar from '../../components/navbar/Navbar';
import About from '../about/About';
import Details from '../details/Details';

const Home = ({ handleLogout }) => {
    const [formValues, setFormValues] = useState({
        mealType: 'breakfast',
        query: '',
    });
    const [data, setData] = useState({});

    const getValues = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };
    const fetchData = async (formValues) => {
        const apiKey = 'b7cf878e2917992672b093d529cd879d';
        const apiId = 'a685f529';
        const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${formValues.query}&app_id=${apiId}&app_key=${apiKey}&mealType=${formValues.mealType}`;
        await axios(url).then((res) => {
            if (!res.ok) {
                console.log(`ERROR ${res.status}`);
            }
            setData(res.data);
        });
    };

    return (
        <>
            <Header
                getValues={getValues}
                fetchData={fetchData}
                formValues={formValues}
            />

            <Main formValues={formValues} data={data} />
            <Footer />
        </>
    );
};

export default Home;
