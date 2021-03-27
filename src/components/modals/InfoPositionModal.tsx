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
import { IMovieResponseDto } from '../../api/dto';

type InfoPositionModalProps = {
    closeModal: () => void,
    selectedItemId: number,
    open: boolean
}

const Image = styled.img`
    max-width: 220px;
    max-height: 300px
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

const InfoPositionModal = ({ closeModal, selectedItemId, open }: InfoPositionModalProps) => {

    return (
        <Dialog
            open={open}
            maxWidth={"sm"}
            onClose={() => closeModal()}
        >
            <DialogTitle>{`Informacje o pozycji: ${mockItemDetails.name}`}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Grid container spacing={1}>
                        <Grid item sm={12} md={4}>
                            <Image src={mockItemDetails.imgUrl} />
                        </Grid>
                        <Grid item sm={12} md={8}>
                            <Paper>
                                <List>
                                    <ListItem divider>
                                        <ListItemText primary={`Nazwa: ${mockItemDetails.name}`} />
                                    </ListItem>
                                    <ListItem divider>
                                        <ListItemText primary={`Reżyser: ${mockItemDetails.director}`} />
                                    </ListItem>
                                    <ListItem divider>
                                        <ListItemText primary={`Gatunek: ${mockItemDetails.genre}`} />
                                    </ListItem>
                                    <ListItem divider>
                                        <ListItemText primary={`Cena: ${mockItemDetails.price}`} />
                                    </ListItem>
                                    <ListItem divider>
                                        <ListItemText primary={`Ilość: ${mockItemDetails.quantity}`} />
                                    </ListItem>
                                    <ListItem divider>
                                        <ListItemText primary={`Stan: ${mockItemDetails.state}`} />
                                    </ListItem>
                                    <ListItem divider>
                                        <ListItemText primary="Informacje" />
                                    </ListItem>
                                    <Paper>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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