import { useState } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import Details from './pages/details/Details';
import Home from './pages/home/Home';
import Login from './pages/login/Login';

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
    console.log(user);

    return (
        <BrowserRouter>
            {user ? (
                <>
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
                </>
            ) : (
                <Login handleLogin={handleLogin} />
            )}
        </BrowserRouter>
    );
}

export default App;
