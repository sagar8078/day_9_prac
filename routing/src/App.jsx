
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import Footer from './Footer'

function App() {
  

  return (
    
      <BrowserRouter>
      <Navbar/>
        

        <Routes>

          <Route path='/' element={<Home/>}>  </Route>
          <Route path='/about' element={<About />}>  </Route>
          <Route path='/Contact' element={<Contact />}>  </Route>

        </Routes>
        

        <Footer/>


      </BrowserRouter>
    
  )
}

export default App
