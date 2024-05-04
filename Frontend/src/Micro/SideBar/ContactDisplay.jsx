import React from 'react'
import { Link } from 'react-router-dom'

export default function ContactDisplay({name}) {


  return (
   <Link className="flex items-center gap-3 px-8 py-6 text-gray-500 transition-all rounded-lg hover:bg-gray-200 hover:text-gray-900 " href="#">
    <img src={`https://api.dicebear.com/8.x/initials/svg?seed=${name}`} alt="John Doe" className="w-12 h-12 rounded-full" />
      <span className='text-[18px]'>{name}</span>
    </Link>
  )
}
