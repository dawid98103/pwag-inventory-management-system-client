import Modal from '@material-ui/core/Modal';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const ModalContainer = styled(Modal)`
    display: flex;
    align-items: center;
    justify-content: center;
`

const ModalContent = styled(Paper)`

    background-color: theme.palette.background.paper;
    border: '2px solid #000';
    box-shadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    padding: 10px 10px 10px 10px;
`

const HeaderText = styled.h5`
    font-size: 1.25rem;
    margin-bottom: 0px;
    line-height: 1.5;
    margin-top: 0;
    font-weight: 700;
`

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    padding: 1rem 1rem;
    border-bottom: 1px solid #dee2e6;
    border-top-left-radius: calc(.3rem - 1px);
    border-top-right-radius: calc(.3rem - 1px);
`

const ModalBody = styled.div`
    position: relative;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    padding: 1rem;
`

const BodyText = styled.p`
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 1rem;
`

const ModalFooter = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    align-items: center;
    justify-content: flex-end;
    padding: .75rem;
    border-top: 1px solid #dee2e6;
`

const CloseButton = styled(IconButton)`
    padding: .5rem .5rem;
    margin: -.5rem -.5rem -.5rem 5rem;
`

type EditPositionModalProps = {
    closeModal: () => void,
    selectedItemId: number,
    open: boolean
}

const EditPositionModal = ({ closeModal, selectedItemId, open }: EditPositionModalProps) => {

    const handleDeleteButtonClicked = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log(selectedItemId);
    }

    return (
        <ModalContainer
            open={open}
            onClose={() => closeModal()}
        >
            <ModalContent>
                <ModalHeader>
                    <HeaderText>
                        Edycja pozycji inwentarzowej
                    </HeaderText>
                    <CloseButton onClick={() => closeModal()}>
                        <CloseIcon />
                    </CloseButton>
                </ModalHeader>
                <ModalBody>
                    <BodyText>
                        Czy na pewno chcesz usunąć wybraną pozycję?
                    </BodyText>
                </ModalBody>
                <ModalFooter>
                    <Button variant="contained" color="secondary" style={{ marginRight: 10 }} onClick={() => closeModal()}>
                        Anuluj
                    </Button>
                    <Button variant="contained" color="primary" onClick={handleDeleteButtonClicked}>
                        Edytuj
                    </Button>
                </ModalFooter>
            </ModalContent>
        </ModalContainer>
    );
}

export default EditPositionModal;