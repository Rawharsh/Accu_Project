import "./PopResidency.css"


const PopResidency = (props)=>{
   

    const {residencyData} = props;
    console.log(residencyData);

    const {property_name,img_url,price,description,beds,bath} = residencyData;
    console.log(property_name);
    
  return (
    <div className="residency">
         <div className="res-img">
           <img src={img_url}/>
         </div>
        <div className="info">
            <h2>{property_name}</h2>
            <h2 className="price">{price}</h2>
            <p>{description}</p>
            <div className="icons">
                <div className="icon">
                <i class="fa fa-bed" aria-hidden="true"></i>{beds}
                </div>
                <div className="icon">
                <i class="fa fa-bath" aria-hidden="true"></i>{bath}
                </div>
                <div className="icon">
                <i class="fa fa-bed" aria-hidden="true"></i> 3 
                </div>
           

            </div>
        </div>
       

    </div>
  )
}

export default PopResidency