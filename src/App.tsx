import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Store } from './pages/Store'
import { Navbar } from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import { ImageSmudge } from './components/SmudgeImage'

const images = [
  '/imgs/smudgeScreens/4.jpg',
  '/imgs/smudgeScreens/1.jpg',
  '/imgs/smudgeScreens/2.jpg',
  '/imgs/smudgeScreens/3.jpg',
];

function App() {

  return (
    <ShoppingCartProvider>
      <div className='vh-100 vw-100 d-flex justify-content-center align-items-center flex-column' style={{ width: '100%', height: '100%' }}>
        <Navbar />
        {/* <Container fluid className='p-5'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/store' element={<Store />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Container> */}

        <ImageSmudge imageUrls={images} resetThreshold={0.6} />

      </div>
    </ShoppingCartProvider>
  )
}

export default App
