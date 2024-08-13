import React from 'react'
import "./Search.css"

const Search = () => {
  return (
    <div className='searchContainer'>
        <div className="search-box">
            <i className="fa-solid fa-location-dot" id="icon" ></i>
            <input type="text" placeholder="search by title/city/country" />
            <button>Search</button>
            
        </div>

        <div className="categories">
            <button className="btn-1"><i className='fas fa-handshake'></i>
                <b>Rent</b>
            </button>
            <button className="btn-2"><i className='fas fa-gift'></i>
                <b>Buy</b>
            </button>
            <button className="btn-3"><i className='fas fa-comments-dollar'></i>
                <b>Sell</b>
            </button>
        </div>


      
    </div>
  )
}

export default Search
