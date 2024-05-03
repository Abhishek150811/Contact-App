import React from 'react'
import FallBack from './FallBack'
const SingleContact = ({user}) => {
  return (
    <>
    {
        user === undefined ? <FallBack></FallBack> :     
        <div className='h-full w-[85%] border border-red-500'>
            <li><img src={`https://api.dicebear.com/8.x/initials/svg?seed=${user.fullName} ${user.lastName}`} alt="" /></li>
            <h1>{user.firstName} {user.lastName}</h1>
            <h1>{user.phoneNUmber}</h1>
            {user.email != "" && <p>{user.email}</p>}
            {user.dateOfBirth != undefined && <p>{user.dateOfBirth}</p>}
            
            
        </div>
    }
    </>
  )
}

export default SingleContact