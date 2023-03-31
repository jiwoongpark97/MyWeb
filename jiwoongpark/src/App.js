import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./screens/main/"
import About from "./screens/about/"
import Contact from "./screens/contact/"
import Music from "./screens/music/"
import Photos from "./screens/photos/"
import Works from "./screens/works/"
import Background from './images/background.png'
import { useNavigate } from "react-router-dom"

function App() {

  return (
    
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about_me" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact/>}></Route>
            <Route exact path="/music" element={<Music/>}></Route>
            <Route exact path="/photos" element={<Photos/>}></Route>
            <Route exact path="/works" element={<Works/>}></Route>
          </Routes>
        </Router>
    
  )
}

export default App;
