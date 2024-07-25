import React from 'react';
import classes from './Header.module.css';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaLocationDot } from 'react-icons/fa6';
const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className={classes.header}>
      <div className="flex">
        {/* <IoLogoCodepen fontSize={40} style={{ marginRight: 10 }} />{' '} */}
        <Link className={classes.logo} to="/">
          LIBERTY SHINE SERVICES
        </Link>
      </div>

      <div className="flex">
        {/* <IoLogoCodepen fontSize={40} style={{ marginRight: 10 }} />{' '} */}
        <span
          className="flex"
          style={{
            fontWeight: 'bold',
            color: '#fff',
          }}
        >
          <FaLocationDot
            fontSize={25}
            style={{
              marginRight: 10,
            }}
            fill="rgb(243, 189, 28)"
          />{' '}
          MANATEE, SARASOTA & HILLSBOROUGH COUNTIES
        </span>
      </div>

      <div className="">
        <ul className={classes.headerNavigation}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? `${classes.active}` : '')}
          >
            HOME
          </NavLink>

          {/* {pathname === '/' && ( */}
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? `${classes.active}` : '')}
            >
              SERVICES
            </NavLink>
          </li>
          {/* )} */}
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
              FAQ’S
            </NavLink>
          </li>
          <li>
            {/* <NavLink
              to="/reviews"
              className={({ isActive }) => (isActive ? `${classes.active}` : '')}
            >
              REVIEWS
            </NavLink> */}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
