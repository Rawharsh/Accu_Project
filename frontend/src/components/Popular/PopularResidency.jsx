import "./PopularResidency.css"
import PopResidency from "../PopResidency/PopResidency"
import { popularResidencyList } from "../../utils/popular_residency"
import { useState,useRef } from "react";

const PopularResidency = ()=>{
    const containerRef = useRef(null);
    const [scrollAmount,setScrollAmount] = useState(0);

  const scroll_left = ()=>{
      setScrollAmount(prevAmount => {
           const newAmount = prevAmount - 100;
           containerRef.current.style.transform = `translateX(${newAmount}px)`;
           return newAmount;
      });
  };
   
   
    
  
    

    return (
        <div className="popular-div">
           <div className="popular-residency">
               <center><h1>Popular Residencies</h1></center> 
               <center><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem illo tempora nostrum facere,<br/> assumenda neque dicta nihil pariatur quo harum, dolor voluptas. Dolores?</p></center> 

               <div className="scroll-btn">
                <button className="left-btn" onClick={scroll_left}><i class="fa fa-chevron-left" aria-hidden="true"></i></button>
                <button className="right-btn"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>
               </div>

               <div className="popularScroll"> { popularResidencyList.map((residency)=> (
                // console.log(residency)
                <PopResidency residencyData = {residency} />
              ))}</div>
            
                
           </div>
        </div>
    )
}

export default PopularResidency


