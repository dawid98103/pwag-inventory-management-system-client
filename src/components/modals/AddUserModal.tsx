import { useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Divider } from '@material-ui/core';
import { IMovieSaveDto, IUserSaveDto } from '../../api/dto';
import FormControl from '@material-ui/core/FormControl';
import { Role } from '../../api/dto';
import InventoryAPI from '../../api/api';

type AddPositionModalProps = {
    closeModal: () => void,
    refreshData: () => void,
    open: boolean
}

const Paper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Form = styled.form`
    min-width: 100%;
`

const MarginDivider = styled(Divider)`
    margin: 16px 0px 16px 0px;
`

const RoleSelect: Role[] = [
    {
        roleId: 1,
        name: "Użytkownik"
    },
    {
        roleId: 2,
        name: "Administrator"
    }
]

type AddInputs = {
    username: string,
    password: string
}

const AddPositionModal = ({ closeModal, refreshData, open }: AddPositionModalProps) => {
    const { register, handleSubmit, watch, errors } = useForm<AddInputs>();
    const [role, setRole] = useState<number>(1);

    const onSubmit = (data: AddInputs) => {
        const movieToSave: IUserSaveDto = {
            id: 0,
            username: data.username,
            password: data.password,
            roleId: role
        }

        InventoryAPI.post<IMovieSaveDto>("/users", { ...movieToSave })
            .then(response => {
                if (response.status === 200) {
                    refreshData();
                    closeModal();
                }

            })
            .catch(error => {
                alert(error.message)
            })
    }

    const handleGenreChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setRole(event.target.value as number);
    };

    return (
        <Dialog
            open={open}
            maxWidth={"sm"}
            fullWidth
            onClose={() => closeModal()}
        >
            <DialogTitle>{`Dodanie nowego użytkownika`}</DialogTitle>
            <DialogContent>
                <Paper>
                    <Form>
                        <TextField
                            name="username"
                            variant="outlined"
                            size={"small"}
                            required
                            fullWidth
                            label="Nazwa użytkownika"
                            autoFocus
                            inputRef={register}
                        />
                        <MarginDivider />
                        <TextField
                            name="password"
                            variant="outlined"
                            size={"small"}
                            required
                            fullWidth
                            label="Hasło"
                            type="password"
                            autoFocus
                            inputRef={register}
                        />
                        <MarginDivider />
                        <FormControl variant="outlined" size={"small"} fullWidth>
                            <Select
                                name="role"
                                label="Rola"
                                value={role}
                                onChange={handleGenreChange}
                            >
                                {
                                    RoleSelect.map(role => {
                                        return <MenuItem value={role.roleId}>{role.name}</MenuItem>
                                    })
                                }
                            </Select>
                        </FormControl>
                    </Form>
                </Paper>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="default" onClick={() => closeModal()}>
                    Anuluj
                </Button>
                <Button variant="contained" color="primary" onClick={handleSubmit(onSubmit)}>
                    Dodaj
                 </Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddPositionModal;