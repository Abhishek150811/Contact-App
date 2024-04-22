import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSun , faMoon} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    const [currtheme , setCurrTheme] = useState(0) ; 

    function handleClick(){
        setCurrTheme((prev)=>{
            const curr = !prev ; 
            return curr ; 
        })
    }

  return (
    <div className='navbar' >
        <li>Contact App</li>
        <button onClick={()=>{handleClick}} ></button>
        <li>Login</li>
        
    </div>
  )
}
