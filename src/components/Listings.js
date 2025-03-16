// Handles auction 'listings'
import React from "react";

const CarListing = ({ image, text }) => {
    return (
      <div className="listing-card">
        <img src={image} alt={text} className="listing-image" />
        <div className="listing-info">{text}</div>
      </div>
    );
  };

const Listings = () => {
    const CarListings = [
        { image: "/images/honda-FIT-0.jpg", text: "2008 HONDA FIT RS"},
        { image: "/images/merc-SLK-0.jpg", text: "1999 MERCEDES-BENZ SLK230 KOMPRESSOR"},
        { image: "/images/toyota-MRS-0.jpg", text: "2001 Toyota MR2 S-Edition"},
        { image: "/images/toyota-LANDCRUISER-0.jpg", text: "1999 TOYOTA LAND CRUISER VX"},
        { image: "/images/subaru-forestersti-0.jpg", text: "2002 SUBARU FORESTER STI"}
    ];
    return (
        <>
        <div className="titleText">
            <h3>NEW ARRIVALS</h3>
        </div>
        <div className="listings-container">
        {/* GET ALL CARLISTING DATA AND DISPLAY ALL OF IT */}
        {CarListings.map((carListing, index) => (
            <div className="listing-card">
                <CarListing key={index} 
                image={carListing.image} 
                text={carListing.text} />
            </div>
        ))}
        </div>
        </>
    )
}

export default Listings;