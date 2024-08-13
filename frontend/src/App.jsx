import { Suspense, useState } from "react";
import "./App.css";

import Website from "./pages/Website";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ListingPage from "./pages/ListingPage";

function App() {

  const [userDetails, setUserDetails] = useState({
    favourites: [],
    bookings: [],
    token: null,
  });

  return (
        
        <BrowserRouter>
        <Header/>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Website />} />
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/addListing" element={<ListingPage/>} />

  
            </Routes>
          </Suspense>
        </BrowserRouter>
  );
}

export default App;
