import React from 'react';
import classes from './Header.module.css';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className="flex">
        {/* <IoLogoCodepen fontSize={40} style={{ marginRight: 10 }} />{' '} */}
        <Link className={classes.logo} to="/">
          LIBERTY SHINE SERVICES
        </Link>
      </div>
      <div className="">
        <ul className={classes.headerNavigation}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? `${classes.active}` : '')}
          >
            HOME
          </NavLink>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? `${classes.active}` : '')}
            >
              SERVICES
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) => (isActive ? `${classes.active}` : '')}
            >
              PORTFOLIO
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/questions"
              className={({ isActive }) => (isActive ? `${classes.active}` : '')}
            >
              FAQ`S
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reviews"
              className={({ isActive }) => (isActive ? `${classes.active}` : '')}
            >
              REVIEWS
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
