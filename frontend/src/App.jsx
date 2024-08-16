import { Suspense, useState } from "react";
import "./App.css";

import Website from "./pages/Website";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ListingPage from "./pages/ListingPage";
<<<<<<< HEAD
import Footer from "./components/Footer/Footer";
import Employee from "./pages/employee";
=======
import ListingDetailPage from "./pages/ListingDetailPage";
>>>>>>> b99e75dd55f1e75471bde064dbbd21b7c136f1c3

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
                <Route path="/employee" element={<Employee/>} />

                <Route path="/listing" element={<ListingFilterPage/>}>
                <Route path=":listingId" element={<ListingDetailPage/>}/>
                </Route>

  
            </Routes>
          </Suspense>
        <Footer/>
        </BrowserRouter>
  );
}

export default App;

