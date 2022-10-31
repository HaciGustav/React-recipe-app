import { useState } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Login from './pages/login/Login';

function App() {
    const [user, setUser] = useState(false);
    const handleLogin = () => {
        setUser(true);
    };
    const handleLogout = () => {
        setUser(false);
    };
    console.log(user);
    return (
        <BrowserRouter>
            {user ? <Home /> : <Login handleLogin={handleLogin} />}
            {/* <Routes>
                <Route
                    path="/home"
                    element={<Home handleLogout={handleLogout} />}
                />
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Login />} />
            </Routes> */}
        </BrowserRouter>
    );
}

export default App;
