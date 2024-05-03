import {useContext , useEffect, useState} from 'react'
import { useAuth } from '../Hooks/useAuth';
import axios from 'axios'
import SideBar from '../Micro/SideBar'
import SingleContact from '../Micro/SingleContact'

export default function Dashboard() {
  const [currSelected , setCurrSelected] = useState() ; 
  const {contacts , setContacts} = useAuth([]) ; 

  useEffect(()=>{
    async function getContacts(){
      try{

        let token = localStorage.getItem('token') ; 
        
        const {data} = await axios.get('http://127.0.0.1:3000/api/v1/contacts/me' , {
          headers : {
            Authentication : `Bearer ${token}`
          }
        })

        setContacts(data.data) ; 
      }
      catch(err){
        console.log("Error in gettting contacts of the user" , err.message) ; 
      }
    }
    getContacts() ; 
  }, []) ; 

  return (
    <div className='w-full flex h-[90.5vh] '>
        <SideBar currSelected={currSelected} setCurrSelected={setCurrSelected} />
        <SingleContact currSelected={currSelected} setCurrSelected={setCurrSelected} />
    </div>

  )
}
