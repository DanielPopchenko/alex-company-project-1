import React from 'react';
import Slider from 'react-slick';
import classes from './Slider.module.css';

function MySlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={classes.sliderContainer}>
      <Slider {...settings}>
        <div className={classes.slide}>
          <p>SERVING MANATEE AND SARASOTA COUNTY</p>
          <h1 className={classes.sliderTitle}>PROFESSI0NAL WINDOW CLEANING</h1>
        </div>
        <div className={classes.slide}>
          <p>WE LIKE TO SEE YOUR WINDOWS SHINE</p>
          <h1 className={classes.sliderTitle}>
            RESIDENTIAL AND COMMERCIAL WINDOW CLEANING
          </h1>
        </div>
      </Slider>
    </div>
  );
}

export default MySlider;
