import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FlexColumn } from '../../styles/Containers.styles';
import { Button, Input } from '../../styles/Inputs.styles';
import { PageCenter } from '../../styles/PageCenter.styles';

const Login = ({ handleLogin }) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    };

    return (
        <PageCenter bgImg>
            <form>
                <FlexColumn>
                    <Input
                        onChange={(e) => {
                            setUserName(e.target.value);
                            console.log(e.target.value);
                        }}
                        value={userName}
                        required
                        placeholder="USERNAME"
                    />
                    <Input
                        onChange={(e) => {
                            setPassword(e.target.value);
                            console.log(e.target.value);
                        }}
                        value={password}
                        type="password"
                        required
                        placeholder="PASSWORD"
                    />
                    <Button onClick={(e) => handleSubmit(e)} type="submit">
                        <Link to="/home">Login</Link>
                    </Button>
                </FlexColumn>
            </form>
        </PageCenter>
    );
};

export default Login;
