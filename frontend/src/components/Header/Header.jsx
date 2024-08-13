import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {

  const [signBtn,setSignBtn] = useState("SignIn")
  
  return (
   <div className="header">
    <div className="right"><img src="./public/WhatsApp Image 2024-08-09 at 17.55.39_c6f72915.jpg"/></div>
    <div className="left">
        <ul>
           
            <Link to="/"> <li>Home</li></Link> 
            <li>Explore</li>
       
            <Link to="/addListing"> <li>Add Listing</li></Link> 
            <Link to="/signin"> <li>{signBtn}</li></Link> 
        </ul>
    </div>
   </div>
  );
};


export default Header;
