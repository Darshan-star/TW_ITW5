import React from "react";
import "./hotel.css";
import Locations from "./Components/Locations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src:
        "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
    },

    {
      src:
        "https://images.rosewoodhotels.com/is/image/rwhg/seascape-ocean-view-twin-room",
    },
    {
      src:
        "https://media.istockphoto.com/photos/hotel-corridor-picture-id184618876?k=20&m=184618876&s=612x612&w=0&h=Gx3h4RkKLZ5w7bMDY0vYx6WtFwuc_4ptjHqAaHmZxwA=",
    },
    {
      src:
        "https://i.pinimg.com/originals/b7/9a/a2/b79aa2a79689c139cda069fe643632d8.jpg",
    },
    {
      src:
        "https://media.architecturaldigest.com/photos/5fa96ad2ef4a8be843bc1412/master/pass/lounge02.jpg",
    },

    {
      src:
        "https://www.falstaff-travel.com/wp-content/uploads/2021/12/neue-hotels-2022-aman-new-york.png",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
       <div className="stay" >
                            <h1 className='text-center mb-5 mt-5'> ROOM VIEW</h1>
                            
                          
                        </div>
      
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper mb-5">
       
         

          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
       
        </div>
      
      </div>
      <Locations/>
    </div>
  );
};

export default Hotel;
