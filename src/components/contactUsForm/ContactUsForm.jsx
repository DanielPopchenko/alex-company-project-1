import React from 'react';
import classes from './ContactUsForm.module.css';
import { FaPhone } from 'react-icons/fa6';

const ContactUsForm = () => {
  return (
    <section className={classes.formSection}>
      <div className={classes.contentContainer}>
        <div className={classes.formBox}>
          <h2>GET A FREE QUOTE</h2>
          <form className={classes.form}>
            <div className="">
              <label>
                <span>First name</span>
                <input type="text" placeholder="First name" required />
              </label>

              <label>
                <span>Last name</span>
                <input type="text" placeholder="Last name" required />
              </label>
            </div>

            <div className="">
              <label>
                <span>Phone</span>
                <input type="text" placeholder="Phone" required />
              </label>

              <label>
                <span>Email</span>
                <input type="text" placeholder="Email" required />
              </label>
            </div>

            <hr />
            {/* full width adress input */}
            <div className="">
              <label className={classes.fullWidthInput}>
                <span>Adress</span>
                <input type="text" placeholder="Adress" required />
              </label>
            </div>

            <div className="">
              <label>
                <span>City</span>
                <input type="text" placeholder="City" required />
              </label>
              <label>
                <span>Zip code</span>
                <input type="text" placeholder="ZicCode" required />
              </label>
            </div>

            <button>Submit</button>
          </form>
        </div>
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
