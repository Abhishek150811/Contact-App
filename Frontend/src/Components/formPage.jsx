import {createContext , useContext} from 'react'
import { CartContext } from '../store/LoginContext';
import axios from 'axios'
import { useState } from 'react';
import { toast } from 'sonner';

export default function FormPage() {
    const {isLogin , setIsLogin} = useContext(CartContext) ; 

    const [currState , setCurrState] = useState('login') ; 
    const [formData , setFormData] = useState({
        phoneNumber : '' , 
        fullName : '' , 
        otp : -1 ,

    })
    const [loading, setLoading] = useState(false)

    async function handleSendNumber(e){
        e.preventDefault() ; 
        try{
            setLoading(true)
            const {data} = await axios.post('url', {
                phoneNumber:formData.phoneNumber
            })

            if(data.success){
                //console.log('Otp is Sent')
                toast.success('OTP Sent Successfully')
                setIsLogin(1)
            }

        }
        catch(err){
            toast.error('Something Went Wrong!!')
        }
        finally{
            setLoading(false)
        }
        
    }   
    
    async function handlesSendVerify(e){
        e.preventDefault() ; 

        const obj = await axios({
            method : 'GET' , 
            url : 'verify entered otp is correct or not' , 
            data : {
                phoneNumber : formData.phoneNumber , 
                otp : formData.otp , 
            }
        })
        
    }
    
    async function handlesSendSignup(e){
        e.preventDefault() ; 

        const obj = await axios({
            method : 'POST' , 
            url : ''
        })

    }

    const handleVerifyOTP = async (e)=>{
        e.preventDefault()
         try{
            setLoading(true)
            const {data} = await axios.post('url', {
                phoneNumber:formData.phoneNumber,
                otp:formData.otp
            })

            if(data.success){
                //console.log('Otp is Sent')
                toast.success('Logined!!')
                localStorage.setItem('token', data.token)
                //set user in global state to data.data
                if(data.data.fullName){
                    //router.push
                }
                setIsLogin(2)
            }

        }
        catch(err){
            toast.error('Something Went Wrong!!')
        }
        finally{
            setLoading(false)
        }
    }

     const handleUpdateUser = async (e)=>{
        e.preventDefault()
         try{
            setLoading(true)
            const {data} = await axios.put('url', {
                fullName:formData.fullName
            }, {
                headers:{
                    Authorization: `Bearer ${localStorage.getItem('token') || ''}`
                }
            })

            if(data.success){
                //console.log('Otp is Sent')
                toast.success('Updated!!')
                //set user in global state to data.data
                if(data.data.fullName){
                    //router.push
                }
                setCurrState(3)
            }

        }
        catch(err){
            toast.error('Something Went Wrong!!')
        }
        finally{
            setLoading(false)
        }
    }
  return (
    <div className='form' >
        
            {isLogin === 0 && <form action='' onSubmit={handleSendNumber}>
                <h1>Enter a Valid Number</h1>
                <label htmlFor="phone-number">Phone Number</label>
                <input disabled={loading} type="text" id='phone-number' value={formData.phoneNumber} onChange={(e)=>{
                    setFormData((prev)=>{
                        return {...prev , phoneNumber : e.target.value}
                    })
                }} />
                <input disabled={loading} type="submit" value="Send OTP" />
            </form>}
            {isLogin === 1 && <form onSubmit={handleVerifyOTP}>
                <h1>Your otp is sent to {formData.phoneNumber}. It will valid only for next 10 minutes</h1>
                <label htmlFor="otp">OTP</label>
                <input type="text" id='otp' value={formData.otp} onChange={(e)=>{
                    setFormData((prev)=>{
                        return {...prev , otp : e.target.value}
                    })
                }} />
                <input type="submit" value="Verify" />
            </form>}
            {/* {currState === 'signup' && <form>
                } */}
            {
                (isLogin === 2 && !user.fullName) && (
                    <form onSubmit={handleUpdateUser}>
                    <h1>Enter Your Detiails</h1>
                <label htmlFor="full-name" >Full Name</label>
                <input type="text" id='full-name' value={formData.fullName} onChange={(e)=>{
                    setFormData((prev)=>{
                        return {...prev , fullName : e.target.value} ; 
                    })
                }} />
                <input type="submit" value="Save" />
            </form>
                )
            }
        
        

    </div>
  )
}
