import React, { useRef , useState, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import IconWiDaySunny from "../utils/dayicon";
import SearchBar from "./SearchBar";
import { useAuth } from "../Hooks/useAuth";
import Dialog from "./Dialog";

export default function Navbar() {
  const { isLogined, setIsLogined, user, setUser } = useAuth();
  const [currtheme, setCurrTheme] = useState(0);
  const [colourChange, setColourChange] = useState(0);
  
  const myref = useRef() ; 
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login") {
      setColourChange(1);
    }
  }, []);

  const handleColourChange = () => {
    if (window.scrollY >= 80) {
      setColourChange(1);
    } else {
      setColourChange(0);
    }
  };
  window.addEventListener("scroll", handleColourChange);

  function handleClick() {
    setCurrTheme((prev) => {
      const curr = !prev;
      return curr;
    });
  }
  let iconStyle;
  if (currtheme == 0) {
    iconStyle = {
      color: "white",
      backgroundColor: "black",
    };
  } else {
    iconStyle = {
      color: "black",
      backgroundColor: "white",
    };
  }

  function handleLoginButton(e) {
    navigate("/login");
  }
  function handleOpenDialog(){
    myref.current.showModal() ; 
  }
  function handleClose(){
    myref.current.close() ; 
  }

  const icon = currtheme === 0 ? faMoon : IconWiDaySunny;

  return (
    <div
      style={{
        backgroundColor: `${
          colourChange === 0 ? "rgba(81, 120, 237, 0)" : "white"
        }`,
      }}
      className="navbar "
    >
      <Dialog ref={myref} ></Dialog>
      <li
        className="cursor-pointer"
        onClick={() => {
          navigate("/");
          setColourChange(0);
        }}
      >
        Contact App
      </li>
      {isLogined == 2 ? (
        <div>
          <FontAwesomeIcon style={iconStyle} icon={faMoon} />
          <li onClick={handleLoginButton} className="cursor-pointer">
            Login
          </li>
        </div>
      ) : (
        <div>
          <li>  <SearchBar  ></SearchBar> </li>
          <li onClick={handleOpenDialog} >Add Contacts</li>
          <FontAwesomeIcon style={iconStyle} icon={faMoon} />
          <li className="cursor-pointer">Log out</li>
        </div>
      )}
    </div>
  );
}
