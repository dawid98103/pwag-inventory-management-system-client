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
import FormControl from '@material-ui/core/FormControl';
import InventoryAPI from '../../api/api';
import { IMovieResponseDto, IMovieSaveDto, MovieGenre, State } from '../../api/dto';

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

type InfoPositionModalProps = {
    closeModal: () => void,
    selectedItemId: number,
    open: boolean
}

type EditInputs = {
    name: string,
    director: string,
    price: number,
    quantity: number,
    info: string,
    imageUrl: string
}

const EditPositionModal = ({ closeModal, selectedItemId, open }: InfoPositionModalProps) => {
    const { register, handleSubmit, setValue, watch, errors } = useForm<EditInputs>();
    const [movie, setMovie] = useState<IMovieResponseDto>();
    const [genre, setGenre] = useState<number | undefined>(1);
    const [state, setState] = useState<number | undefined>(1);

    const fetchMovieData = () => {
        InventoryAPI.get<IMovieResponseDto>(`/movies/${selectedItemId}`)
            .then(response => {
                const movieDto: IMovieResponseDto = response.data;
                console.log(movieDto);
                setMovie(movieDto);
                setValue('name', movieDto.name);
                setValue('director', movieDto.director);
                setValue('price', movieDto.price);
                setValue('quantity', movieDto.quantity);
                setValue('info', movieDto.info);
                setValue('imageUrl', movieDto.imgUrl);

                setGenre(getGenreSelectValue(movieDto.genre));
                setState(getStateSelectValue(movieDto.state));
            })
            .catch(error => {
                alert(error.message)
            })
    }

    function getGenreSelectValue(name: string): number | undefined {
        console.log("getGenreSelectValue");
        return MovieGenresSelect.find(genre => genre.name === name)?.genreId;
    }

    const getStateSelectValue = (stateName: string): number | undefined => {
        console.log("getStateSelectValue");
        return StateSelect.find(state => state.name === stateName)?.stateId;
    }

    const onSubmit = (data: EditInputs) => {
        const movieToUpdate: IMovieSaveDto = {
            id: selectedItemId,
            name: data.name,
            director: data.director,
            price: data.price,
            quantity: data.quantity,
            state: state === undefined ? 1 : state,
            info: data.director,
            genre: genre === undefined ? 1 : genre,
            imgUrl: data.imageUrl
        }

        InventoryAPI.put<IMovieSaveDto>("/movies", { ...movieToUpdate })
            .then(response => {
                if (response.status === 200) {
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
            onEntered={() => fetchMovieData()}
            onClose={() => closeModal()}
        >
            <DialogTitle>{`Edycja filmu: ${movie?.name}`}</DialogTitle>
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
                                        return <MenuItem value={genre.genreId} key={genre.genreId}>{genre.name}</MenuItem>
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
                                    return <MenuItem value={state.stateId} key={state.stateId}>{state.name}</MenuItem>
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
                    Edytuj
                 </Button>
            </DialogActions>
        </Dialog>
    );
}

export default EditPositionModal;