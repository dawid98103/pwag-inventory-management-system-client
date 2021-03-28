import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InventoryAPI from '../../api/api';

type DeletePositionModalProps = {
    closeModal: () => void,
    selectedItemId: number,
    open: boolean
}

const DeletePositionModal = ({ closeModal, selectedItemId, open }: DeletePositionModalProps) => {

    const handleDeleteButtonClicked = (event: React.MouseEvent<HTMLButtonElement>) => {
        InventoryAPI.delete(`/movies/${selectedItemId}`)
            .then(response => {
                if (response.status === 200)
                    closeModal();
            })
            .catch(error => {
                alert(error.message)
            })
    }

    return (
        <Dialog
            open={open}
            onClose={() => closeModal()}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Usunięcie pozycji inwentarzowej"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Czy na pewno chcesz usunąć pozycję inwerntarzową?
          </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="primary" onClick={() => closeModal()}>
                    Anuluj
                 </Button>
                <Button variant="contained" color="secondary" onClick={handleDeleteButtonClicked}>
                    Usuń
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default DeletePositionModal;