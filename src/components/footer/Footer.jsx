import React from 'react';
import classes from './Footer.module.css';
import { FaPhone } from 'react-icons/fa6';
import { FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.logoContainer}>
      <p className={classes.logo}>LIBERTY SHINE SERVICES LLC</p>
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
      <div className={classes.phone}>
        <span>
          <FaPhone fill="green" fontSize={32} />
        </span>{' '}
        <p>(123) 123-123-1234</p>
      </div>
    </footer>
  );
};

export default Footer;
