import { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import Details from './pages/details/Details';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import NotFound from './pages/NotFound';

function App() {
    const [user, setUser] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleLogin = (password, userName, setPassword, setUserName) => {
        if (password != '' && userName != '') {
            setUser(true);
        } else {
            alert('Please fill out the required fields! ');
        }
    };
    const handleLogout = () => {
        setUser(false);
    };

    return (
        <BrowserRouter>
            {user ? (
                <>
                    <Navbar />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Home
                                    loading={loading}
                                    setLoading={setLoading}
                                    handleLogout={handleLogout}
                                />
                            }
                        />
                        <Route
                            path="*"
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
                    </Routes>
                </>
            ) : (
                <Routes>
                    <Route
                        path="/"
                        element={<Login handleLogin={handleLogin} />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            )}
        </BrowserRouter>
    );
}

export default App;
