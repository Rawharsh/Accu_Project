import React, { useState, useRef } from "react";
import "./ListingForm.css";

const ListingForm = () => {
  const [selectedFiles, setSelectedFiles] =useState([]);
  //render the images
  const [uploadedImages, setUploadedImages] = useState([]);
  const fileInputRef = useRef(null); // Create a reference for the file input

  const handleChooseFiles = () => {
    // console.log("Choose Files button clicked");
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the click on the file input
    }
  };

  const handleFileChange = (event) => {
    setSelectedFiles(Array.from(event.target.files));
  };

  const handleUpload = () => {
    if (selectedFiles.length > 0) {
      const newImages = selectedFiles.map(file => ({id:URL.createObjectURL(file),file}
    ));
      setUploadedImages([...uploadedImages, ...newImages]);
      setSelectedFiles([]); // Clear selected files after upload
    } else {
      console.log("No files selected");
    }
  };

  const handleDeleteImage = (id) => {
    setUploadedImages(uploadedImages.filter(image => image.id !== id));
    URL.revokeObjectURL(id); // Revoke the object URL to free up memory
  };

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
                <button type="button" className="choose" onClick={handleChooseFiles}>
                  Choose Files
                </button>
                <p>{selectedFiles ? `${selectedFiles.length} file(s) chosen` : "No File Chosen"}</p>
                <input
                  type="file"
                  ref={fileInputRef} // Assign the reference to the file input
                  style={{ display: "none" }}
                  multiple
                  onChange={handleFileChange}
                />
              </div>
              <button type="button" className="upload" onClick={handleUpload} >Upload</button>
            </div>
            <div className="uploaded-images">
              {uploadedImages.map((image, index) => (
               <div key={index} className="uploaded-image">
               <img src={image.id} alt={`Uploaded ${index + 1}`} style={{ width: "100px", margin: "10px" }} />
               <button onClick={() => handleDeleteImage(image.id)} className="delete-button">Delete</button>
             </div>
           ))}
            
          </div>
          </div>
        </form>
        <div className="level">
          <div className="space" id="select">
            <input type="checkbox" id="rent" name="listingType" />
            <label htmlFor="rent">Rent</label>
            <input type="checkbox" id="sell" name="listingType" />
            <label htmlFor="sell">Sell</label>
            <input type="checkbox" id="other" name="listingType" />
            <label htmlFor="offer">Other</label>
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
