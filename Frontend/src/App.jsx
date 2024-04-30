import { useState , useEffect } from "react";
import Navbar from "./Components/Navbar";
import { Outlet, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ContactsPage from "./Components/ContactsPage";
import FormPage from "./Components/FormPage";
import { CartContext } from "./store/LoginContext";
import "./App.css";
import { Toaster } from "sonner";

function App() {
  const [isLogin, setIsLogin] = useState(0);

  // useeffect functin to see whether our already existing token is valid or not
  useEffect( () => {
    async ()=>{
      const token = localStorage.getItem('token');
      const obj = await axios.post('me', {
        headers : {
          Authentication : `Bearer ${token}`
        }
      })
      if(obj.success){
        setIsLogin(3) ; 
      }
      else{
        setIsLogin(0) ; 
      }
    }

  }, []);

  return (
    <CartContext.Provider value={{isLogin , setIsLogin}} >
      {isLogin === 0 && 
      <div className="main-box">
        <Navbar ></Navbar>
        <Routes>
          <Route path='/login' element={<FormPage></FormPage>}/>
          <Route path="/" element={<Home></Home>}>
            {" "}
          </Route>
          <Route path="/:id" element={<ContactsPage></ContactsPage>}></Route>
        </Routes>
        <FormPage></FormPage>
        <Toaster />
      </div>
      }
    </CartContext.Provider>
  );
}

export default App;
