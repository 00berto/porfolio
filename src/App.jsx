/* REACT */

/* Carousel icono */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cardDetails } from "./CarouselConfig";

const IconCarousel = () => {
  const settings = {
    dots: false, //si false  no se veen los botones (en css:slick-prev o slick-before o slick-arrow)
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "80%",
        margin: "0 auto",
        overflowX: "hidden",
      }}
    >
      <Slider {...settings}>
        {Object.keys(cardDetails).map((key) => {
          const { imgSrc, title } = cardDetails[key];
          return (
            <div
              key={key}
              style={{
                overflow: "hidden",
                textAlign: "center",
                width: "100%",
                maxWidth: "100vw",
              }}
            >
              <img
                src={imgSrc}
                alt={title}
                className="imagen-icono"
                style={{
                  /*
                  width: "80px",
                  height: "80px",*/
                  objectFit: "contain",
                  margin: "auto",
                }}
                //style={{ width: 100, height: 100, marginBottom: 10 }}
              />
              <h4>{title}</h4>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default IconCarousel;
