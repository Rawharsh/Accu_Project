import "./Hero.css";
// import CountUp from "react-countup";
// import { motion } from "framer-motion";
import "../Search/Search.jsx"
import Search from "../Search/Search.jsx";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
      
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
          
            <h1>Discover <br />
              Most Suitable
              <br /> Property
            </h1>
          </div>
          
          <div className="flexColStart secondaryText flexhero-des">
            <span>Find a variety of properties that suit you very easilty</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>


          <div className="flexCenter stats">
            {/* <div className="flexColCenter stat"> */}
             
            <Search/>
            {/* </div> */}
          </div>
        </div>

      
        <div className="flexCenter hero-right">
         
          <div className="image-container">
            <img src="./hero-image.png" alt="houses" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
