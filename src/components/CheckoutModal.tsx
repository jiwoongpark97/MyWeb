import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { CartItem } from './CartItem';
import { formatCurrency } from '../utilities/formatCurrency';
import storeItems from '../../src/data/items.json'

type CheckoutModalProps = {
    show: boolean
    onHide: () => void
}


export function CheckoutModal({ show, onHide }: CheckoutModalProps) {
    const { cartItems } = useShoppingCart();

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            dialogClassName='modal-80w modal-80h'
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
                <div className='d-flex'>
                    <div>
                        {
                            cartItems.map(item => (
                                <CartItem {...item} />
                            ))
                        }
                    </div>
                    <div>
                        Hello
                    </div>
                </div>
                <div className='fw-bold d-flex justify-content-end'>
                    <u>
                        Total {formatCurrency(cartItems.reduce((total, cartItem) => {
                            const item = storeItems.find(i => i.id === cartItem.id)
                            return total + (item?.price || 0) * cartItem.quantity
                        }, 0))}
                    </u>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Yes</Button>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}