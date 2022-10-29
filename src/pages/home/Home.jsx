import React from 'react';
import { Routes } from 'react-router';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Main from '../../components/main/Main';
import Navbar from '../../components/navbar/Navbar';

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Main />
            <Footer />
        </>
    );
};

export default Home;
