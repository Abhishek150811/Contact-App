import {forwardRef, useState , useRef} from 'react'

const Dialog = forwardRef( function Dialog({handleClose } , ref) {
    const [formData , setFormData] = useState({
        firstName : '' , 
        LastName : '' , 
        email : '' , 
        DateOfBirth : Date.now() , 
        phoneNumber : '' , 
    })

    const handleSubmit = (e)=>{
        e.preventDefault() ; 
    }

  return (
    <dialog ref={ref} onClose={handleClose} className='dialog-box' id='dialog' >
        <form action="" onSubmit={handleSubmit} >
            <label htmlFor="">First Name</label>
            <input  value={formData.firstName} onChange={(e)=>setFormData((prev)=>({...prev , firstName : e.target.value}))} type="text" /> 
            <label htmlFor="">Last Name</label>
            <input  value={formData.LastName} onChange={(e)=>setFormData((prev)=>({...prev , LastName : e.target.value}))} type="text" /> 
            <label htmlFor=""> Phone Number</label>
            <input value={formData.phoneNumber} onChange={(e)=>setFormData((prev)=>({...prev , phoneNumber : e.target.value}))} type="text" /> 
            <label  htmlFor=""> Email</label>
            <input value={formData.email} onChange={(e)=>setFormData((prev)=>({...prev , email : e.target.value}))} type="email" /> 
            <label htmlFor="">Date of Birth</label>
            <input value={formData.DateOfBirth} onChange={(e)=>setFormData((prev)=>({...prev , DateOfBirth : e.target.value}))} type="date" name="" id="" />

            <div>
                <input className='submit-btn' type="submit" value="Add to Contact" />
                <button className='close-btn' onClick={handleClose} >Close</button>
            </div>


        </form>
    </dialog>
  )
})

export default Dialog
