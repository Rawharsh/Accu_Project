import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';



const Header = () => {
  
  const location = useLocation();
  // const { userName } = location.state || {};
  const token = localStorage.getItem('token')
  console.log(token);
  
  
  
  // console.log('header', typeof (username));
  
  const [signBtn, setSignBtn] = useState("SignIn")
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username,setUsername] = useState(localStorage.getItem('username'))
  useEffect(() => {
    // console.log(username);
    // username =localStorage.getItem('username')
    
    if (token) {
      setIsLoggedIn(true);
      setUsername(localStorage.getItem('username'));
      setSignBtn(username);
    }
    else{
      setIsLoggedIn(false);
      setUsername(localStorage.getItem('username'));
      setSignBtn("signIn")
    }
  }, [token,username]);

  console.log(username);
  
  // const changeSignIn = () => {


  //   setSignBtn(username)
  // }



  return (
    <div className="header">
      <div className="right"><img src="./public/WhatsApp Image 2024-08-09 at 17.55.39_c6f72915.jpg" /></div>
      <div className="left">
        <ul>

          <Link to="/"> <li>Home</li></Link>
          <li>Explore</li>

          <Link to="/addListing"> <li>Add Listing</li></Link>
          {/* <Link to="/signin"> <li>{signBtn}</li></Link>  */}
          {isLoggedIn ? (
            // {console.log(username)}
            
            <Link to={`/profile/${username}`}>
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


export default Header;
