import React from 'react';
import classes from './ContactUsForm.module.css';
import { FaPhone } from 'react-icons/fa6';
import Form from './Form';

const ContactUsForm = () => {
  return (
    <section className={classes.formSection} id="callUs">
      <div className={classes.contentContainer}>
        {/* form */}
        <div className={classes.formBox}>
          <h2>GET A FREE QUOTE</h2>
          <Form />
          {/* <Form2Var /> */}
        </div>

        {/* phone box */}
        <div className={classes.phoneBox}>
          <div className="">
            <h2>FEEL FREE TO CALL US.</h2>
            <span className={classes.hearSoonText}>We’d love to hear from you.</span>
          </div>
          <p>
            <span>
              <FaPhone fill="#54c036" fontSize={32} />
            </span>{' '}
            <a style={{ color: '#111' }} href="tel:(123) 123-123-1234">
              (123) 123-123-1234
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
