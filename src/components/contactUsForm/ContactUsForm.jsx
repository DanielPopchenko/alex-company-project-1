import React from 'react';
import classes from './ContactUsForm.module.css';
import { FaPhone } from 'react-icons/fa6';
import Form from './Form';
import Form2Var from './Form2Var';

const ContactUsForm = () => {
  return (
    <section className={classes.formSection} id="callUs">
      <div className={classes.contentContainer}>
        {/* form */}
        <div className={classes.formBox}>
          <h2>GET A FREE QUOTE</h2>
          <Form />
          <Form2Var />
        </div>

        {/* phone box */}
        <div className={classes.phoneBox}>
          <div className="">
            <h2>FEEL FREE TO CALL US</h2>
          </div>
          <p>
            <span>
              <FaPhone fill="green" fontSize={32} />
            </span>{' '}
            (123) 123-123-1234
          </p>
          <span className={classes.hearSoonText}>We`d love to hear from you</span>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
