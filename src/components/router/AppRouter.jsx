import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route
                    path="/home"
                    element={
                        <Home
                            loading={loading}
                            setLoading={setLoading}
                            handleLogout={handleLogout}
                        />
                    }
                />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
