import React from 'react'
import ListingImageComponent from '../ListingImageComponent/ListingImageComponent'
import "./ListingDetail.css"

const ListingDetail = () => {
  return (
    <div className='ListingDisplayForm'>
      <div className="listingMainPage">
        <ListingImageComponent/>
      

      <div className="listingDetails">
      <div className="leftListingDetails">
          <div className="overview">
            <h2>Overview</h2>

            <div className="cards">
              <div className="cardBoxi card1">
                  <h5>Bedrooms</h5>
                  <div className='symbolPara'>
                  <i class="fa-solid fa-bed"></i>
                  <p>3</p>
                  </div>
              </div>
              <div className="cardBoxi card2">
                <h5>Bathrooms</h5>
                <div className='symbolPara'>
                <i class="fa-solid fa-bath"></i>
                <p>3</p>
                </div>
              </div>
              <div className="cardBoxi card3">
                <h5>Garage</h5>
                <div className='symbolPara'>
                <i class="fa-solid fa-warehouse"></i>
                <p>1</p>
                </div>
              </div>
              <div className="cardBoxi card4">
                <h5>Area</h5>
                <div className='symbolPara'>
                <i class="fa-solid fa-chart-area"></i>
                <p>43000 sq ft</p>
                </div>
              </div>
            </div>

          </div>

          <div className="description">
            <h2>Description</h2>
            <p>
            Enchanting three bedroom, three bath home with spacious one bedroom, one bath cabana, in-laws quarters. Charming living area features fireplace and fabulous art deco details. Formal dining room. Remodeled kitchen with granite countertops, white cabinetry and stainless appliances. Lovely master bedroom has updated bath, beautiful view of the pool. Guest bedrooms have walk-in, cedar closets. Delightful backyard; majestic oaks surround the free form pool and expansive patio, wet bar and grill.</p>
          </div>

          <div className="additionalDetails">
            <h2>Additional Details</h2>
            <ul>
              <li>
                <span class="title">BEDROOM FEATURES:</span>
                <span class="value">Main Floor Master Bedroom, Walk-In Closet</span>
              </li>
              <li>
                <span class="title">DINING AREA:</span>
                <span class="value">Breakfast Counter/Bar, Living/Dining Combo</span>
              </li>
              <li>
                <span class="title">DOORS &amp; WINDOWS:</span>
                <span class="value">Bay Window</span>
              </li>
              <li>
                <span class="title">ENTRY LOCATION:</span>
                <span class="value">Mid Level</span>
              </li>  
              <li>
                <span class="title">EXTERIOR CONSTRUCTION:</span>
                <span class="value">Wood</span>
              </li>
              <li>
                <span class="title">FIREPLACE FUEL:</span>
                <span class="value">Pellet Stove</span>
              </li>

              <li>
                <span class="title">FLOORS:</span>
                <span class="value">Raised Foundation, Vinyl Tile, Wall-to-Wall Carpet, Wood</span>
              </li>

            </ul>
          </div>
        </div>
        
      <div className="rightListingDetails">
        <div className="agentCard">
           <div className="agentPhoto">
            <img className='agentProfilePhoto' src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png" alt="" />
            <div className="agentDetails">
            <h4>Agent</h4>
            <h1>Melissa William</h1>
            <h3>View My Listings</h3>
            </div>
           </div>

           <div className="agentProfileData">
                  <p class="contact office">
                    <span>Office </span>
                    <span>93375485</span>
                  </p>
                  <p class="contact mobile">
                    <span>Mobile </span>
                    <span>84584583</span>							
                  </p>
                  <p class="contact whatsapp">
                        <span>WhatsApp </span>
                        <span>737564375</span>
                  </p>

                  <p class="contact email">
                        <span>Email </span>
                        <span>melissa@gmail.com</span>
                    </p>
           </div>
        </div>

      </div>
      </div>

      </div>

      
    </div>
  )
}

export default ListingDetail
