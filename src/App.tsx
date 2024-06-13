import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import About from './pages/About'
import Store from './pages/Store'
import Navbar from './components/Navbar'
import Slideshow from './pages/Slideshow';
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import ImageSmudge from './components/SmudgeImage'

const images = [
  '/imgs/smudgeScreens/1.png',
  '/imgs/smudgeScreens/2.png',
  '/imgs/smudgeScreens/3.png',
  '/imgs/smudgeScreens/4.png',
  '/imgs/smudgeScreens/5.png',
];

function App() {

  return (
    <ShoppingCartProvider>
      <div className='vh-100 vw-100 d-flex justify-content-center align-items-center flex-column' style={{ boxSizing: 'border-box', margin: 0, padding: 0, overflow: 'hidden' }}>
        <Navbar />
        <Container className='h-100 w-100' fluid style={{ margin: 0, padding: 0 }}>
          <Routes>
            <Route path='/' element={<ImageSmudge imageUrls={images} resetThreshold={0.8} />} />
            <Route path='/store' element={<Store />} />
            <Route path='/about' element={<About />} />
            <Route path='/project' element={<Slideshow />} />
          </Routes>
        </Container>
        {/* <ImageSmudge imageUrls={images} resetThreshold={0.6} /> */}

      </div>
    </ShoppingCartProvider>
  )
}

export default App
