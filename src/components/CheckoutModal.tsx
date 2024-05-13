import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { CartItem } from './CartItem';
import { formatCurrency } from '../utilities/formatCurrency';
import storeItems from '../../src/data/items.json'
import Form from 'react-bootstrap/Form'
import { FormEvent, useState } from 'react';

type CheckoutModalProps = {
    show: boolean
    onHide: () => void
}

type eventProps = {
    event: FormEvent<HTMLFormElement>
}

export function CheckoutModal({ show, onHide }: CheckoutModalProps) {
    const { cartItems } = useShoppingCart();
    const [validated, setValidated] = useState(false);

    const handleSubmit = ({ event }: eventProps) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        console.log(event);
    };

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
                    <div className='vr'></div>
                    <div style={{ width: '45%' }}>
                        <Form validated={validated} onSubmit={() => handleSubmit}>
                            <Form.Group className="mb-3" controlId="emailForm.Name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control required type="name" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="emailForm.Company">
                                <Form.Label>Company</Form.Label>
                                <Form.Control required type="name" placeholder="Enter your company" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="emailForm.Email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control required type="email" placeholder="example@yourcompany.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="emailForm.Comment">
                                <Form.Label>Any comments?</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button type='submit'>Process</Button>
                        </Form>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}