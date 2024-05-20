import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
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
      <div className='vh-100 vw-100 d-flex justify-content-center align-items-center flex-column' style={{ boxSizing: 'border-box', margin: 0, padding: 0, overflow: 'hidden' }}>
        <Navbar />
        <Container fluid style={{ margin: 0, padding: 0 }}>
          <Routes>
            <Route path='/' element={<ImageSmudge imageUrls={images} resetThreshold={0.8} />} />
            <Route path='/store' element={<Store />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Container>
        {/* <ImageSmudge imageUrls={images} resetThreshold={0.6} /> */}

      </div>
    </ShoppingCartProvider>
  )
}

export default App
