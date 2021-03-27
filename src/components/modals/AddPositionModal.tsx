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
import { IMovieResponseDto } from '../../api/dto';
import FormControl from '@material-ui/core/FormControl';
import { MovieGenresSelect } from '../../api/dto';
import { StateSelect } from '../../api/dto';

type AddPositionModalProps = {
    closeModal: () => void,
    open: boolean
}

const Paper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Form = styled.form`
    width: 700px;
`

const MarginDivider = styled(Divider)`
    margin: 8px 0px 8px 0px;
`

const mockItemDetails: IMovieResponseDto = {
    name: "Zielona mila",
    director: "Frank Darabont",
    price: 2.50,
    quantity: 5,
    state: "OK",
    info: "bla bla bla",
    genre: "Akcja",
    imgUrl: "https://media.multikino.pl/thumbnails/50/rc/REEzODcy/eyJ0aHVtYm5haWwiOnsic2l6ZSI6WyIxMDAwMCIsIjEwMDAwIl0sIm1vZGUiOiJpbnNldCJ9fQ==/uploads/images/films_and_events/psykoty-poster_f59daab7c7.JPG"
}

type AddInputs = {
    name: string,
    director: string,
    price: number,
    quantity: number,
    group: number,
    info: string,
    imgUrl: string
}

const AddPositionModal = ({ closeModal, open }: AddPositionModalProps) => {
    const { register, handleSubmit, watch, errors } = useForm<AddInputs>();
    const [genre, setGenre] = useState<number>(0);
    const [state, setState] = useState<number>(0);

    const onSubmit = (data: AddInputs) => {
        console.log(data);
        console.log(genre);
        console.log(state);
    }

    const handleGenreChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        console.log(event);
        setGenre(event.target.value as number);
    };

    const handleStateChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        console.log(event);
        setState(event.target.value as number)
    };

    return (
        <Dialog
            open={open}
            maxWidth={"lg"}
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