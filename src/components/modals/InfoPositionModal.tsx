import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import InventoryAPI from '../../api/api';
import { IMovieResponseDto } from '../../api/dto';

type InfoPositionModalProps = {
    closeModal: () => void,
    selectedItemId: number,
    open: boolean
}

const Image = styled.img`
    max-width: 320px;
    max-height: 400px
`

const InfoPositionModal = ({ closeModal, selectedItemId, open }: InfoPositionModalProps) => {
    const [movie, setMovie] = useState<IMovieResponseDto | null>(null);

    const fetchMovieData = () => {
        InventoryAPI.get<IMovieResponseDto>(`/movies/${selectedItemId}`)
            .then(response => {
                setMovie(response.data);
            })
            .catch(error => {
                alert(error.message);
            })
    }

    return (
        <Dialog
            open={open}
            maxWidth={"md"}
            fullWidth
            onEntering={() => fetchMovieData()}
            onClose={() => closeModal()}
        >
            <DialogTitle>{`Informacje o pozycji: ${movie?.name}`}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Grid container spacing={4}>
                        <Grid item sm={12} md={4}>
                            <Image src={movie?.imgUrl} />
                        </Grid>
                        <Grid item sm={12} md={8}>
                            <Paper>
                                <List>
                                    <ListItem divider>
                                        <ListItemText primary={`Nazwa: ${movie?.name}`} />
                                    </ListItem>
                                    <ListItem divider>
                                        <ListItemText primary={`Reżyser: ${movie?.director}`} />
                                    </ListItem>
                                    <ListItem divider>
                                        <ListItemText primary={`Gatunek: ${movie?.genre}`} />
                                    </ListItem>
                                    <ListItem divider>
                                        <ListItemText primary={`Ostatnia aktualizacja: ${movie?.lastUpdated}`} />
                                    </ListItem>
                                    <ListItem divider>
                                        <ListItemText primary={`Cena: ${movie?.price}`} />
                                    </ListItem>
                                    <ListItem divider>
                                        <ListItemText primary={`Ilość: ${movie?.quantity}`} />
                                    </ListItem>
                                    <ListItem divider>
                                        <ListItemText primary={`Stan: ${movie?.state}`} />
                                    </ListItem>
                                    <ListItem divider>
                                        <ListItemText primary="Informacje" />
                                    </ListItem>
                                    <Paper>
                                        <p>
                                            {movie?.info}
                                        </p>
                                    </Paper>
                                </List>
                            </Paper>
                        </Grid>
                    </Grid>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="primary" onClick={() => closeModal()}>
                    Zamknij
                 </Button>
            </DialogActions>
        </Dialog>
    );
}

export default InfoPositionModal;