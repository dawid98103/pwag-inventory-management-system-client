import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useForm } from "react-hook-form";
import styled from 'styled-components';

const Paper = styled.div`
    margin-top: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const CustomAvatar = styled(Avatar)`
    margin: 8px;
    background-color: #d84315;
`

const Form = styled.form`
    width: '100%';
    margin-top: 8px;
`

const SubmitButton = styled(Button)`
    margin: 24px 0px 16px;
    font-weight: bold;
`

type FormInputs = {
    username: string,
    password: string
}

const LoginForm = () => {
    const { register, handleSubmit, watch, errors } = useForm<FormInputs>();
    const onSubmit = (data: FormInputs) => console.log(data);

    return (
        <Container component="main" maxWidth="xs">
            <Paper>
                <CustomAvatar>
                    <LockOutlinedIcon />
                </CustomAvatar>
                <Typography variant="h5">
                    Zaloguj się
                </Typography>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Nazwa użytkownika"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        helperText={errors.username !== undefined ? "Login powinien zawierać od 3 do 32 znaków" : ""}
                        error={errors.username !== undefined}
                        inputRef={register({ minLength: 3, maxLength: 32 })}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Hasło"
                        type="password"
                        id="password"
                        helperText={errors.password !== undefined ? "Hasło powinno zawierać od 6 do 32 znaków" : ""}
                        error={errors.password !== undefined}
                        inputRef={register({ minLength: 6, maxLength: 32 })}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Zapamiętaj mnie"
                    />
                    <SubmitButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Zaloguj
                    </SubmitButton>
                </Form>
            </Paper>
        </Container>
    )
}

export default LoginForm;