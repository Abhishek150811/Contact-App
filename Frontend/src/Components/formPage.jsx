import React from 'react'
import axios from 'axios'
import { useState } from 'react';

export default function FormPage() {
    const [currState , setCurrState] = useState('login') ; 
    const [formData , setFormData] = useState({
        phoneNumber : '' , 
        fullName : '' , 
        otp : -1 , 

    })

    async function handleSendNumber(e){
        e.preventDefault() ; 
        const obj = await axios({
            method : 'GET' , 
            url : 'get if phone number is there in user model or not' ,
            data : {
                phoneNumber : formData.phoneNumber
            }
        })
        
    }   
    
    async function handlesSendVerify(e){
        e.preventDefault() ; 
        
    }
    
    async function handlesSendSignup(e){
        e.preventDefault() ; 

    }
  return (
    <div className='form' >
        
            {currState === 'login' && <form action='' onSubmit={handleSendNumber}>
                <h1>Enter a Valid Number</h1>
                <label htmlFor="phone-number">Phone Number</label>
                <input type="text" id='phone-number' value={formData.phoneNumber} onChange={(e)=>{
                    setFormData((prev)=>{
                        return {...prev , phoneNumber : e.target.value}
                    })
                }} />
                <input type="submit" value="Send OTP" />
            </form>}
            {currState === 'otp' && <form>
                <h1>Your otp is sent to {formData.phoneNumber}. It will valid only for next 10 minutes</h1>
                <label htmlFor="otp">OTP</label>
                <input type="text" id='otp' value={formData.otp} onChange={(e)=>{
                    setFormData((prev)=>{
                        return {...prev , otp : e.target.value}
                    })
                }} />
                <input type="submit" value="Verify" />
            </form>}
            {currState === 'signup' && <form>
                <h1>You Phone number is not registered yet. Fill the required details to proceed</h1>
                <label htmlFor="full-name" >Full Name</label>
                <input type="text" id='full-name' value={formData.fullName} onChange={(e)=>{
                    setFormData((prev)=>{
                        return {...prev , fullName : e.target.value} ; 
                    })
                }} />
                <input type="submit" value="Save" />
            </form>}
        

    </div>
  )
}
