import { Suspense, useState } from "react";
import "./App.css";

import Website from "./pages/Website";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ListingPage from "./pages/ListingPage";
import Footer from "./components/Footer/Footer";
import Employee from "./pages/employee";
import ListingFilterPage from "./pages/ListingFilterPage";
import ListingDetailPage from "./pages/ListingDetailPage";

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

