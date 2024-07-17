import React from 'react';
import classes from './Header.module.css';
import { IoLogoCodepen } from 'react-icons/io';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className="flex">
        <IoLogoCodepen fontSize={40} style={{ marginRight: 10 }} />{' '}
        <span
          style={{
            fontWeight: 'normal',
            fontSize: 20,
          }}
        >
          Liberty Shine Services LLC
        </span>
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
