import { Col, Row } from 'react-bootstrap'
import storeItems from '../data/items.json'
import { StoreItems } from '../components/StoreItem'

export function Store() {
    return (
        <div className='overflow-auto' style={{ paddingTop: '150px', paddingLeft: 10, paddingRight: 10, paddingBottom: 10, height: '100vh', backgroundColor: '#999491' }}>
            <Row md={2} xs={1} lg={3} className='g-3'>
                {storeItems.map(item => (
                    <Col key={item.id}><StoreItems {...item} /></Col>
                ))}
            </Row>
        </div>
    )
}