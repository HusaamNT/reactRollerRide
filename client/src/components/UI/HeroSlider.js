import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/hero-slider.css";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content ">
            <h1 className="text-light mb-3">Welcome ro RollerRide !</h1>
            <h5 className="text-light mb-4">Come on Britain, it’s time to book your 2023 escape!
Anyone wishing to visit, including Passholders will need to pre-book a ticket in advance. If the date is unavailable on the calendar, that date is unfortunately sold out. Book early to guarantee the best price for your ticket</h5>

            <button className="btn reserve__btn mt-4">
              <Link to="/rides">Book</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content ">
            <h1 className="text-light mb-3">Welcome to RollerRide ! </h1>
            <h5 className="text-light mb-4">Come on Britain, it’s time to book your 2023 escape!Anyone wishing to visit, including Passholders will need to pre-book a ticket in advance. If the date is unavailable on the calendar, that date is unfortunately sold out. Book early to guarantee the best price for your ticket</h5>

            <button className="btn reserve__btn mt-4">
              <Link to="/rides">Book</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
            <h1 className="text-light mb-3">Welcome to RollerRide !</h1>
            <h5 className="text-light mb-4">Come on Britain, it’s time to book your 2023 escape!
Anyone wishing to visit, including Passholders will need to pre-book a ticket in advance. If the date is unavailable on the calendar, that date is unfortunately sold out. Book early to guarantee the best price for your ticket</h5>

            <button className="btn reserve__btn mt-4">
              <Link to="/rides">Book</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
