import React, { useEffect } from "react";
import './main.css'
import img from '../../Assets/maldives.jpg'
import img2 from '../../Assets/alps.jpg'
import img3 from '../../Assets/newyork.jpg'
import img4 from '../../Assets/serengeti.jpg'
import img5 from '../../Assets/rome.jpg'
import img6 from '../../Assets/hawaii.jpg'
import img7 from '../../Assets/kyoto.jpg'
import img8 from '../../Assets/nepal.jpg'
import img9 from '../../Assets/borabora.jpg'

import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";




const Data = [
    {
      id: 1,
      imgSrc: img,
      destTitle: "Beach Paradise",
      location: "Maldives",
      grade: "5-star",
      fees: "$1500",
      description: "Escape to the serene beaches of the Maldives and indulge in luxury at a 5-star resort."
    },
    {
      id: 2,
      imgSrc: img2,
      destTitle: "Mountain Retreat",
      location: "Swiss Alps",
      grade: "4-star",
      fees: "$1200",
      description: "Experience the breathtaking beauty of the Swiss Alps with a cozy stay at a 4-star mountain lodge."
    },
    {
      id: 3,
      imgSrc: img3,
      destTitle: "City Adventure",
      location: "New York City",
      grade: "4-star",
      fees: "$1000",
      description: "Immerse yourself in the vibrant culture of New York City with a luxurious stay at a 4-star hotel."
    },
    {
      id: 4,
      imgSrc: img4,
      destTitle: "Safari Expedition",
      location: "Serengeti National Park",
      grade: "5-star",
      fees: "$2000",
      description: "Embark on an unforgettable safari adventure in the heart of the Serengeti National Park, staying at a luxurious 5-star lodge."
    },
    {
      id: 5,
      imgSrc: img5,
      destTitle: "Historical Tour",
      location: "Rome",
      grade: "3-star",
      fees: "$800",
      description: "Discover the ancient wonders of Rome while enjoying a comfortable stay at a charming 3-star hotel."
    },
    {
      id: 6,
      imgSrc: img6,
      destTitle: "Tropical Getaway",
      location: "Hawaii",
      grade: "5-star",
      fees: "$1800",
      description: "Unwind in paradise with a luxurious stay at a 5-star resort nestled in the tropical beauty of Hawaii."
    },
    {
      id: 7,
      imgSrc: img7,
      destTitle: "Cultural Exploration",
      location: "Kyoto",
      grade: "4-star",
      fees: "$1500",
      description: "Immerse yourself in the rich cultural heritage of Kyoto while staying at a comfortable 4-star hotel."
    },
    {
      id: 8,
      imgSrc: img8,
      destTitle: "Adventure Trek",
      location: "Nepal",
      grade: "3-star",
      fees: "$1000",
      description: "Embark on an exhilarating trek through the rugged landscapes of Nepal, staying at cozy 3-star lodges along the way."
    },
    {
      id: 9,
      imgSrc: img9,
      destTitle: "Island Escape",
      location: "Bora Bora",
      grade: "5-star",
      fees: "$2500",
      description: "Experience ultimate luxury on a secluded island paradise in Bora Bora, with a stay at a lavish 5-star resort."
    }
  ];
  
  

const Main = () => {

  useEffect(()=>{
    Aos.init({duration : 2000});
  }, [])
    return (
        <section className="main container section">

            <div className="secTitle">
                <h3  data-aos = "fade-right" className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
                        return(
                            <div key = {id} className="singleDestination" data-aos = "fade-up" >
                               
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">
                                        {destTitle}
                                    </h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon"/>
                                        <span className="name">
                                            {location}
                                        </span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className="btn flex">BOOK NOW</button>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Main