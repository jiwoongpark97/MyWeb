import { Container, Navbar as NavbarBs, Nav, Button } from 'react-bootstrap'
import { useShoppingCart } from '../context/UseShoppingCart.tsx'
import Image from 'react-bootstrap/Image'
import '../App.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const { openCart, cartQuantity, getActiveNav, setActiveNav } = useShoppingCart()

    return (
        <NavbarBs className='w-100' style={{ backgroundColor: 'transparent', position: 'fixed', top: 0, pointerEvents: 'none', userSelect: 'none', height: '150px', zIndex: 2 }}>
            <Container className='d-flex justify-content-between'>
                <Nav defaultActiveKey={getActiveNav()} as='ul' onSelect={(eventKey) => setActiveNav(eventKey ?? 'home')}>
                    <Nav.Link as={Link} to='/' eventKey={"home"} style={{ pointerEvents: 'auto', color: 'white', fontSize: '20px' }} >
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to='/store' eventKey={"store"} style={{ pointerEvents: 'auto', color: 'white', fontSize: '20px' }} >
                        Store
                    </Nav.Link>
                    <Nav.Link as={Link} to='/about' eventKey={"about"} style={{ pointerEvents: 'auto', color: 'white', fontSize: '20px' }} >
                        About
                    </Nav.Link>
                    <Nav.Link as={Link} to='/project' eventKey={"project"} style={{ pointerEvents: 'auto', color: 'white', fontSize: '20px' }} >
                        Project
                    </Nav.Link>
                </Nav>
                <Image src='../imgs/logo.png' width={200} height={200} />
                <Button style={{ width: '4rem', height: '4rem', position: 'relative', pointerEvents: 'auto', zIndex: 2, borderColor: 'white' }} variant='outline-primary' className='rounded-circle' onClick={openCart}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        fill="white"
                    >
                        <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                    </svg>
                    {cartQuantity > 0 && (
                        <div className='rounded-circle bg-danger d-flex justify-content-center
                        align-items-center' style={{ color: 'white', width: '1.5rem', height: '1.5rem', position: 'absolute', bottom: 0, right: 0, transform: 'translate(25%, 25%' }}>
                            {cartQuantity}
                        </div>
                    )}
                </Button>
            </Container>
        </NavbarBs>
    )
}