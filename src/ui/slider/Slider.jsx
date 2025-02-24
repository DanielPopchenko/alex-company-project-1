import React from 'react';
import Slider from 'react-slick';
import classes from './Slider.module.css';

function MySlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: 'transparent',
        }}
      >
        <ul
          style={{
            marginTop: '90px',
            display: 'flex',
            justifyContent: 'center',
            gap: 10,
          }}
        >
          {' '}
          {dots}{' '}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          width: '11px',
          height: '11px',
          color: '#fff',
          border: '1px solid #fff',
          borderRadius: '50%',
        }}
      ></div>
    ),
  };
  return (
    <div className={classes.sliderContainer}>
      <Slider {...settings}>
        <div className={classes.slide}>
          <p>SERVING MANATEE AND SARASOTA COUNTIES</p>
          <h1 className={classes.sliderTitle}>PROFESSIONAL WINDOW CLEANING</h1>
        </div>
        <div className={classes.slide}>
          <p>WE LIKE TO SEE YOUR WINDOWS SHINE</p>
          <h1 className={classes.sliderTitle}>
            RESIDENTIAL AND COMMERCIAL WINDOW CLEANING
          </h1>
        </div>
        <div className={classes.slide}>
          <p>DELIVERS TRUSTED REPAIR SERVICES</p>
          <h1 className={classes.sliderTitle}>SCREEN REPAIR SERVICES</h1>
        </div>
        <div className={classes.slide}>
          <p>DON’T SRESS WE’LL HANDLE THE MESS</p>
          <h1 className={classes.sliderTitle}>GUTTER CLEANING SERVICES</h1>
        </div>
      </Slider>
    </div>
  );
}

export default MySlider;
