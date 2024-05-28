import { Col, Row } from 'react-bootstrap'
import storeItems from '../data/items.json'
import { StoreItems } from '../components/StoreItem'
import {useShoppingCart} from "../context/UseShoppingCart.tsx";
import {useEffect} from "react";

export default function Store() {
    const { setActiveNav } = useShoppingCart();

    useEffect(() => {
        setActiveNav("store");
    });

    return (
        <div className='overflow-auto' style={{ paddingTop: '150px', paddingLeft: '40px', paddingRight: '40px', paddingBottom: '40px', height: '100vh', backgroundColor: '#999491' }}>
            <Row md={2} xs={1} lg={3} className='g-3'>
                {storeItems.map(item => (
                    <Col key={item.id}><StoreItems {...item} /></Col>
                ))}
            </Row>
        </div>
    )
}