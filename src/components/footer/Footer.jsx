import React from 'react';
import classes from './Footer.module.css';
import { FaPhone } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>Company name</p>
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
