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
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            backdrop='static'
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
                <div className='d-flex justify-content-around'>
                    <div className='d-grid' style={{ width: '45%' }}>
                        {
                            cartItems.map(item => (
                                <CartItem key={item.id} {...item} />
                            ))
                        }
                        <div className='fw-bold d-flex justify-content-end align-it'>
                            <u>
                                Total {formatCurrency(cartItems.reduce((total, cartItem) => {
                                    const item = storeItems.find(i => i.id === cartItem.id)
                                    return total + (item?.price || 0) * cartItem.quantity
                                }, 0))}
                            </u>
                        </div>
                    </div>
                    <div>
                        Hello
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}