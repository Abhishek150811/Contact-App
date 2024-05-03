import React from 'react'
import ContactDisplay from './ContactDisplay';
import { useAuth } from '../../Hooks/useAuth'
const Sidebar = () => {
  const {contacts , setContacts} = useAuth() ; 

  return (
    <div className='h-full w-[25%] border border-green-500'>
        <h1>All Contacts</h1>
        {
          contacts.map((val , index)=>{
            <ContactDisplay key={index} name={contacts.fullName} ></ContactDisplay>
          })
        }
    </div>
  )
}

export default Sidebar