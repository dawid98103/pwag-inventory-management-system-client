import React from 'react';
import styled from 'styled-components';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const Content = styled.div`
    display: flex,
    min-width: 500px;
    min-hieght: 150px;
`

const FormContent: React.FC = () => {
    return (
        <Content>
            <FormControl fullWidth>
                <InputLabel htmlFor="input-login">Nazwa użytkownika</InputLabel>
                <Input id="input-login" />
            </FormControl>
            <FormControl fullWidth>
                <InputLabel htmlFor="input-password">Hasło</InputLabel>
                <Input id="input-password" />
            </FormControl>
        </Content>
    )
}

export default FormContent;