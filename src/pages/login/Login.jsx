import React from 'react';
import { FlexColumn } from '../../styles/Containers.styles';
import { Button, Input } from '../../styles/Inputs.styles';

const Login = () => {
    return (
        <FlexColumn>
            <Input required />
            <Input type="password" required />
            <Button>Login</Button>
        </FlexColumn>
    );
};

export default Login;
