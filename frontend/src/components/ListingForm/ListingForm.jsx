import "./ListingForm.css";

const ListingForm = () => {
  return (
    <div className="root">
      <div className="main-container">
        <div className="listing">
          <h1 className="heading">Create a Listing</h1>
        </div>
        <form className="placeholder">
          <div className="form">
            <input type="text" placeholder="Name" />
            <textarea placeholder="Description"></textarea>
            <input type="text" placeholder="Address" />
          </div>

          <div className="create">
            <p>
              <strong>Images:</strong> The first image will be the cover (max 6)
            </p>
            <div className="file">
              <div className="chosen">
                <button type="button" className="choose">Choose Files</button>
                <p>No File Chosen</p>
              </div>
              <button type="button" className="upload">Upload</button>
            </div>
            {/* <button type="submit" className="tap">CREATE LISTING</button> */}
          </div>
        </form>

        <div className="level">
          <div className="space" id="select">
            <input type="checkbox" id="rent" name="listingType" />
            <label htmlFor="rent">Rent</label>
            <input type="checkbox" id="sell" name="listingType" />
            <label htmlFor="sell">Sell</label>
            <input type="checkbox" id="offer" name="listingType" />
            <label htmlFor="offer">Offer</label>
          </div>

          <div className="category">
            <h4>Type:</h4>
            <input type="checkbox" id="flat" name="propertyType" />
            <label htmlFor="flat">Flat</label>
            <input type="checkbox" id="house" name="propertyType" />
            <label htmlFor="house">House</label>
            <input type="checkbox" id="plot" name="propertyType" />
            <label htmlFor="plot">Plot</label>
          </div>

          <div className="amenities">
            <h4>Amenities:</h4>
            <input type="checkbox" id="furnished" name="amenities" />
            <label htmlFor="furnished">Furnished</label>
            <input type="checkbox" id="parking" name="amenities" />
            <label htmlFor="parking">Parking Spot</label>
            <input type="number" id="beds" name="beds" placeholder="Beds" />
            <label htmlFor="beds">Beds</label>
            <input type="number" id="bath" name="bath" placeholder="Bath" />
            <label htmlFor="bath">Bath</label>
          </div>

          <div className="price">
            <h4>Price:</h4>
            <label htmlFor="price">Price</label>
            <input type="text" id="price" name="price" placeholder="Price" />
          </div>
          <button type="submit" className="tap">CREATE LISTING</button>
        </div>
      </div>
    </div>
  );
};

export default ListingForm;
