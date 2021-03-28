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
import { IMovieSaveDto } from '../../api/dto';
import FormControl from '@material-ui/core/FormControl';
import { MovieGenre, State } from '../../api/dto';
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

const MovieGenresSelect: MovieGenre[] = [
    {
        genreId: 1,
        name: "Akcja"
    },
    {
        genreId: 2,
        name: "Komedia"
    },
    {
        genreId: 3,
        name: "Dramat"
    },
    {
        genreId: 4,
        name: "Thriler"
    }
]

const StateSelect: State[] = [
    {
        stateId: 1,
        name: "OK"
    },
    {
        stateId: 2,
        name: "Wypożyczony"
    }
]

type AddInputs = {
    name: string,
    director: string,
    price: number,
    quantity: number,
    group: number,
    info: string,
    imgUrl: string
}

const AddPositionModal = ({ closeModal, refreshData, open }: AddPositionModalProps) => {
    const { register, handleSubmit, watch, errors } = useForm<AddInputs>();
    const [genre, setGenre] = useState<number>(1);
    const [state, setState] = useState<number>(1);

    const onSubmit = (data: AddInputs) => {
        const movieToSave: IMovieSaveDto = {
            id: 0,
            name: data.name,
            director: data.director,
            price: data.price,
            quantity: data.quantity,
            state: state,
            info: data.director,
            genre: genre,
            imgUrl: data.imgUrl
        }

        console.log(movieToSave);

        InventoryAPI.post<IMovieSaveDto>("/movies", { ...movieToSave })
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
        setGenre(event.target.value as number);
    };

    const handleStateChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setState(event.target.value as number)
    };

    return (
        <Dialog
            open={open}
            maxWidth={"sm"}
            fullWidth
            onClose={() => closeModal()}
        >
            <DialogTitle>{`Dodanie nowego filmu`}</DialogTitle>
            <DialogContent>
                <Paper>
                    <Form>
                        <TextField
                            name="name"
                            variant="outlined"
                            size={"small"}
                            required
                            fullWidth
                            label="Nazwa"
                            autoFocus
                            inputRef={register}
                        />
                        <MarginDivider />
                        <TextField
                            name="director"
                            variant="outlined"
                            size={"small"}
                            required
                            fullWidth
                            label="Reżyser"
                            autoFocus
                            inputRef={register}
                        />
                        <MarginDivider />
                        <TextField
                            name="imageUrl"
                            variant="outlined"
                            size={"small"}
                            required
                            fullWidth
                            id="firstName"
                            label="Obrazek"
                            autoFocus
                            inputRef={register}
                        />
                        <MarginDivider />
                        <FormControl variant="outlined" size={"small"} fullWidth>
                            <Select
                                name="genre"
                                label="Gatunek"
                                value={genre}
                                onChange={handleGenreChange}
                            >
                                {
                                    MovieGenresSelect.map(genre => {
                                        return <MenuItem value={genre.genreId}>{genre.name}</MenuItem>
                                    })
                                }
                            </Select>
                        </FormControl>
                        <MarginDivider />
                        <TextField
                            name="price"
                            variant="outlined"
                            size={"small"}
                            required
                            fullWidth
                            type="number"
                            label="Cena"
                            autoFocus
                            inputRef={register}

                        />
                        <MarginDivider />
                        <TextField
                            name="quantity"
                            variant="outlined"
                            size={"small"}
                            required
                            fullWidth
                            type="number"
                            label="Sztuk"
                            autoFocus
                            inputRef={register}
                        />
                        <MarginDivider />
                        <FormControl variant="outlined" size={"small"} fullWidth>
                            <Select
                                label="Stan"
                                name="state"
                                value={state}
                                onChange={handleStateChange}
                            >
                                {StateSelect.map(state => {
                                    return <MenuItem value={state.stateId}>{state.name}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                        <MarginDivider />
                        <TextField
                            name="info"
                            variant="outlined"
                            size={"small"}
                            required
                            fullWidth
                            type="string"
                            label="Informacje"
                            autoFocus
                            inputRef={register}
                        />
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