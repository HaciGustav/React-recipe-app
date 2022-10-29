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
    console.log(user);
    return (
        <BrowserRouter>
            <Login handleLogin={handleLogin} />
            <Home />
        </BrowserRouter>
    );
}

export default App;
