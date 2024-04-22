import React , {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSun , faMoon} from '@fortawesome/free-solid-svg-icons'
import IconWiDaySunny from '../utils/dayicon'
import SearchBar from './SearchBar'

export default function Navbar({name}) {
    const [currtheme , setCurrTheme] = useState(0) ; 

    function handleClick(){
        setCurrTheme((prev)=>{
            const curr = !prev ; 
            return curr ; 
        })
    }

    const icon = currtheme === 0 ? faMoon : IconWiDaySunny ; 

  return (
    <div className='navbar' >
        <li>Contact App</li>
        {/* <button onClick={()=>{handleClick}} > {icon} </button> */}
        {name ===  '' ? <li>Login</li> : <>
                                            <li><SearchBar></SearchBar></li>
                                            <li>My Contacts</li>
                                            <li>Add Contacts</li>
                                            <li>{name}</li>
                                        </>
        }
        
    </div>
  )
}
