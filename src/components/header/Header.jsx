import React from 'react';
import classes from './Header.module.css';
import { IoLogoCodepen } from 'react-icons/io';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className="">
        <IoLogoCodepen fontSize={40} />
      </div>
      <div className="">
        <ul className={classes.headerNavigation}>
          <li>GET A QUOTE</li>
          <li>CALL US</li>
          <li>SERVICES</li>
          <li>PORTFOLIO</li>
          <li>FAQ`S</li>
          <li>REVIEWS</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
