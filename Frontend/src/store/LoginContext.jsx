import { useState , createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext() ; 

export const AuthContextProvider = ({children})=>{
    const navigate = useNavigate() ; 
    const [user , setUser] = useState(null)
    const [isLogined , setIsLogined] = useState(0) ; 

    useEffect( () => {
        async ()=>{
          const token = localStorage.getItem('token');
          const {data} = await axios.get('http:/127.0.0.1:3000/api/v1/users/me', {
            headers : {
              Authentication : `Bearer ${token}`
            }
          })
          if(data.success){
            setIsLogined(3) ; 
            setUser(data.data) ; 
            navigate('/dashboard') ; 
          }
          else{
            setIsLogined(0) ; 
          }
        }
    
      }, []);

    return (
        <AuthContext.Provider value={{user , setUser , isLogined , setIsLogined}}> 
            {children}
        </AuthContext.Provider>
    )
}

