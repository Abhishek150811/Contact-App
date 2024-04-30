import React , {useState , useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSun , faMoon} from '@fortawesome/free-solid-svg-icons'
import { NavLink , useNavigate } from 'react-router-dom'
import IconWiDaySunny from '../utils/dayicon'
import SearchBar from './SearchBar'
import { CartContext } from '../store/LoginContext'


export default function Navbar() {
    const {isLogin , setIsLogin} = useContext(CartContext)
    const [currtheme , setCurrTheme] = useState(0) ; 
    const [colourChange , setColourChange] = useState(0) ; 

    const navigate = useNavigate() ; 

    const handleColourChange = ()=>{
      if(window.scrollY >= 80){
        setColourChange(1) ; 
      }
      else{
        setColourChange(0) ; 
        
      }
    } 
    window.addEventListener('scroll' , handleColourChange) ; 

    function handleClick(){
        setCurrTheme((prev)=>{
            const curr = !prev ; 
            return curr ; 
        })
    }
    let iconStyle ;
    if(currtheme == 0){
      iconStyle = {
        color : 'white' , 
        backgroundColor : 'black'
      }
    }
    else{
      iconStyle = {
        color : 'black' , 
        backgroundColor : 'white'
      }
    }

    function handleLoginButton(e){
      navigate('/login') ; 
    }

    const icon = currtheme === 0 ? faMoon : IconWiDaySunny ; 

  return (
    <div style={{
      backgroundColor : `${colourChange === 0 ? "rgba(81, 120, 237, 0)"  : "white"}`
    }} className='navbar ' >
        <li  >Contact App</li>
        {isLogin ===  0 ? <div>
        <FontAwesomeIcon style={iconStyle} icon={faMoon} />
        <li onClick={handleLoginButton} >Login</li> 
        </div>: <div>
                                            <li><SearchBar></SearchBar></li>
                                            <li>My Contacts</li>
                                            <li>Add Contacts</li>
                                            <FontAwesomeIcon style={iconStyle} icon={faMoon} />
                                            <li>{name}</li>
                                        </div>
        }
        
    </div>
  )
}
