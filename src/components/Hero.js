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
                <Link to="/inventory"><button>OUR INVENTORY</button></Link>
                <Link to="/contact"><button>CONTACT US</button></Link>
                {/* THIS SCROLLS TO BOTTOM OF PAGE */}
                <button>ABOUT US</button>
            </div>
        </div>
        </>
    )
}

export default Hero;