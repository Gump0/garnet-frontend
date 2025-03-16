// HANDLES MAINPAGE
import React from "react";
import Hero from "./Hero.js"
import Listings from "./Listings.js";
import AboutUs from "./AboutUs.js";

const MainPage = () => {
    return (
        <React.Fragment>
            <section>
                <div className="wrapper">
                    <Hero/>
                    <Listings/>
                    <AboutUs/>
                </div>
            </section>
        </React.Fragment>
    )
}

export default MainPage;