// HANDLES MAINPAGE
import React from "react";
import Hero from "../components/Hero.js"
import Listings from "../components/Listings.js";
import AboutUs from "../components/AboutUs.js";

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