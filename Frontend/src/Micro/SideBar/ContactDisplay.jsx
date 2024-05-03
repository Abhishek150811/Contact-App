import React from 'react'

export default function ContactDisplay({name}) {


  return (
    <div>
        <li> <img src={`https://api.dicebear.com/8.x/initials/svg?seed=${name}`} /> </li>
        <li>{name}</li>
    </div>
  )
}
