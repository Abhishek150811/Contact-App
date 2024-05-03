import React from 'react'
import FallBack from './FallBack'
const SingleContact = ({currSelected}) => {
  return (
    <>
    {
        currSelected === undefined ? <FallBack></FallBack> :     
        <div className='h-full w-[85%] border border-red-500'>
            <li><img src={`https://api.dicebear.com/8.x/initials/svg?seed=${user.fullName} ${user.lastName}`} alt="" /></li>
            <h1>{currSelected.firstName} {currSelected.lastName}</h1>
            <h1>{currSelected.phoneNUmber}</h1>
            {currSelected.email != "" && <p>{currSelected.email}</p>}
            {currSelected.dateOfBirth != undefined && <p>{currSelected.dateOfBirth}</p>}
            
            
        </div>
    }
    </>
  )
}

export default SingleContact