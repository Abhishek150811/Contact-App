import {useContext , useState} from 'react'
import {  } from '../store/LoginContext'
import SideBar from '../Micro/SideBar'
import SingleContact from '../Micro/SingleContact'

export default function Dashboard() {
  const [currSelected , setCurrSelected] = useState(-1) ; 
  return (
    <div className='w-full flex h-[91vh] '>
        <SideBar currSelected={currSelected} setCurrSelected={setCurrSelected} />
        <SingleContact currSelected={currSelected} setCurrSelected={setCurrSelected} />
    </div>

  )
}
