import react from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import News from './pages/News'
import Post from './pages/Post'
import Update from './pages/Update'

function App() {

  return (
<>
<Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/news' element={<News/>}/>
        <Route exact path='/post' element={<Post/>}/>
        <Route exact path='update/:id' element={<Update/>}/>
      </Routes>
      <Footer/>
    </Router>
</>
     

  )
}

export default App
