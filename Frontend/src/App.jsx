import { useState } from 'react'
import Navbar from './Components/Navbar'
import { Outlet , Routes , Route } from 'react-router-dom'
import Home from './Components/Home'
import ContactsPage from './Components/ContactsPage'
import './App.css'

function App() {
  

  return (
    <div className='main-box' >
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>} >  </Route>
          <Route path='/:id' element={<ContactsPage></ContactsPage>} ></Route>
        </Routes>
    </div>
  )
}

export default App
