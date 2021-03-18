import React from 'react';
import styled from 'styled-components';

import FormContent from '../components/FormContent';

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 98vh;
`

const Wrapper = styled.div`
    padding: 10px 50px 10px 50px;
    border: 1px solid black;
    border-radius: 25px;
`;

const Title = styled.h1`
    text-align: center;
    background-color: white;
    margin: 25px 0px 25px 0px;
`

const LoginForm: React.FC = () => {
    return (
        <Center>
            <Wrapper>
                <Title>
                    Zaloguj się
                </Title>
                <FormContent />
            </Wrapper>
        </Center>
    )
}

export default LoginForm;