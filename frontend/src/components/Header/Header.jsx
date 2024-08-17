import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';



const Header = () => {
  const location = useLocation();
   const token = localStorage.getItem('token');
    
    const [signBtn, setSignBtn] = useState("SignIn");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState(localStorage.getItem('full_name') || "SignIn");
    console.log(name);
    
    useEffect(() => {
      console.log(token);
      if (token) {
        setIsLoggedIn(true);
        const fullName = localStorage.getItem('full_name');
        setName(fullName);
        setSignBtn(fullName || "Profile");
      } else {
        setIsLoggedIn(false);
        setName(name);
        setSignBtn("SignIn");
      }
    }, [location.pathname]);
  

  return ( 
    <div className="header" key={location.pathname}>
      <div className="right"><img src="./public/WhatsApp Image 2024-08-09 at 17.55.39_c6f72915.jpg" /></div>
      <div className="left">
        <ul>

          <Link to="/"> <li>Home</li></Link>
          <li>Explore</li>

          <Link to="/addListing"> <li>Add Listing</li></Link>
          {/* <Link to="/signin"> <li>{signBtn}</li></Link>  */}
          {isLoggedIn ? (
            // {console.log(name)}
            
            <Link to={`/profile/${localStorage.getItem('user_id')}`} >
              <li>{signBtn}</li>
            </Link>
          ) : (
            <Link to="/signin">
              <li>{signBtn}</li>
            </Link>
          )
          }
        </ul>
      </div>
    </div>
  );
};


export default Header