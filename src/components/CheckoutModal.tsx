import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

type CheckoutModalProps = {
    show: boolean
    onHide: () => void
}


export function CheckoutModal({ show, onHide }: CheckoutModalProps) {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Checkout
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Checking out</h4>
                <p>
                    Do you want to proceed checkout?
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Yes</Button>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}