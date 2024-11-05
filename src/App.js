
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import AboutUs from './pages/AboutUs'



function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage/>}> </Route>
        <Route path="/about" element={<AboutUs/>}> </Route>


      </Routes>
      
      
      
    </>
  )
}

export default App
