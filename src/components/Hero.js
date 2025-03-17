import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <>
        <div className="centered">
            <div className="hero-text">
                <p>IMPORT BAZAAR</p>
            </div>
            <div>
                {/* <button>OUR INVENTORY</button> */}
                <Link to="/Contact"><button>CONTACT US</button></Link>
                {/* <button>ABOUT US</button> */}
            </div>
        </div>
        </>
    )
}

export default Hero;