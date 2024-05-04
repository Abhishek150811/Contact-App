import {forwardRef, useState , useRef} from 'react'
import axios from 'axios'
import { toast } from "sonner";
import { useAuth } from '../Hooks/useAuth';

const CustomInput = forwardRef( function CustomInput({type ,label, ...props} , ref) {
    return <div className='flex flex-col gap-1'>
        <label className='text-gray-500 text-[14px]'>{label}</label>
        <input autoComplete='new-password' className='w-full text-[16px] h-[50px] px-4 border border-gray-300 rounded-lg outline-none focus:border-gray-500 focus:shadow-md' type={type} {...props} ref={ref} />
    </div>

})

const CustomButton = forwardRef( function CustomButton({type ,children, ...props} , ref) {
    return <button className='w-full h-[50px] text-white text-[16px] bg-gray-800 rounded-lg hover:bg-gray-900' type={type} {...props} ref={ref} >{children}</button>

})

const Dialog = forwardRef( function Dialog({setOpen} , ref) {
    const {contacts , setContacts} = useAuth() ;  

    const [formData , setFormData] = useState({
        firstName : '' , 
        LastName : '' , 
        email : '' , 
        DateOfBirth : Date.now() , 
        phoneNumber : '' , 
    })

    const handleSubmit = async(e)=>{
        e.preventDefault() ; 
        try{

            const token = localStorage.getItem('token') ; 
            const obj = await axios.post('http://127.0.0.1:3000/api/v1/contacts/' , {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })

            if(obj.status === 'success'){
                toast.success('Contact Added Successfully') ; 
                const {data} = await axios.get('http://127.0.0.1:3000/api/v1/contacts/me') ; 
                if(data.success === 'Success'){
                    setContacts(data.data) ; 
                }
            }
            else{
                toast.error('Some error occured while adding contacts') ; 
            }


        }
        catch(err){
            console.log("Error occured while adding a new contact" , err.message) ; 
        }

    }

  return (
    <div className='!w-[100vw] h-[100vh] z-[2] bg-black/50 flex items-center justify-center fixed top-0 right-0'>
        <div className=' border border-black p-10 rounded-md !w-[50vw] bg-white'>
            <form className='flex flex-col gap-4' action="" onSubmit={handleSubmit} >
            <CustomInput label="First Name"  value={formData.firstName} onChange={(e)=>setFormData((prev)=>({...prev , firstName : e.target.value}))} type="text" /> 
            <CustomInput label="Last Name"  value={formData.LastName} onChange={(e)=>setFormData((prev)=>({...prev , LastName : e.target.value}))} type="text" /> 
            <CustomInput label="Phone Number" value={formData.phoneNumber} onChange={(e)=>setFormData((prev)=>({...prev , phoneNumber : e.target.value}))} type="text" /> 
            <CustomInput label="Email" value={formData.email} onChange={(e)=>setFormData((prev)=>({...prev , email : e.target.value}))} type="email" /> 
            <CustomInput label="Date Of Birth" value={formData.DateOfBirth} onChange={(e)=>setFormData((prev)=>({...prev , DateOfBirth : e.target.value}))} type="date" name="" id="" />
            <div className='flex gap-4 mt-5'>
                <CustomButton type="submit">Add</CustomButton>
                <CustomButton type="button" onClick={()=>setOpen(false)}>Cancel</CustomButton>
            </div>
        </form>
        </div>
    </div>
  )
})

export default Dialog
