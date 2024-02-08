import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home'
// import RegisterForm from './Components/RegisterForm'
import Contacts from './Components/Contacts'
import Navbar from './Components/navbar'
import RegisterForm from './Components/RegisterForm';


function App() {

  return (
    <>
      <Navbar/>
      <Routes>
   <Route path='/Home' element={<Home/>}/>
   <Route path='/register' element={<RegisterForm/>}/> 
   <Route path='/Contacts' element={<Contacts/>}/>

  </Routes>
    </>
  )
}

export default App
