import React from 'react';
import classes from './Header.module.css';
import { IoLogoCodepen } from 'react-icons/io';
import { Link } from 'react-router-dom';

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
          <Link to="/">HOME</Link>
          {/* <li>
            <a href="/#callUs">CALL US</a>
          </li> */}
          <li>
            <Link to="/services">SERVICES</Link>
          </li>
          <li>
            <Link to="/portfolio">PORTFOLIO</Link>
          </li>
          <li>
            <Link to="/questions">FAQ`S</Link>
          </li>
          <li>
            <Link to="/reviews">REVIEWS</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
