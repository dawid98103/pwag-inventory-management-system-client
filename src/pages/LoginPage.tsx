import React from 'react';
import styled from 'styled-components';

import LoginForm from '../components/LoginForm'

const Wrapper = styled.section`
    padding: 4em;
    background: papaywhip;
`;

const Title = styled.h1`
    text-align: center;
`

const LoginPage: React.FC = () => {
    return (
        <LoginForm />
    )
}

export default LoginPage;