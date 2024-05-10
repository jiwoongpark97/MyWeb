import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Store } from './pages/Store'
import { Navbar } from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

function App() {

  return (
    <ShoppingCartProvider>
      <div className='vh-100 vw-100 overflow-scroll' style={{ backgroundImage: 'url(../imgs/background.gif)', backgroundSize: 'cover' }}>
        <Navbar />
        <Container fluid className='p-5'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/store' element={<Store />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Container>
      </div>
    </ShoppingCartProvider>
  )
}

export default App
