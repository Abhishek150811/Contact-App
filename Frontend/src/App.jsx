import { useState } from 'react'
import Navbar from './Components/Navbar'
import { Outlet , Routes , Route } from 'react-router-dom'
import Home from './Components/Home'
import ContactsPage from './Components/ContactsPage'
import FormPage from './Components/FormPage'
import './App.css'

function App() {
  const [isLogin , setIsLogin] = useState("") ; 

  return (
    <div className='main-box' >
        <Navbar name={isLogin} ></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>} >  </Route>
          <Route path='/:id' element={<ContactsPage></ContactsPage>} ></Route>
        </Routes>
        <FormPage></FormPage>

    </div>
  )
}

export default App
