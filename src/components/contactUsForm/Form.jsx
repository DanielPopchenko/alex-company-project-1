import React, { useState } from 'react';
import classes from './ContactUsForm.module.css';
import Input from '../../ui/input/Input';

import { useSubmitFormData } from '../../hooks/useSubmitFormData';
import { ValidationError } from '@formspree/react';

const Form = () => {
  const { state, handleSubmit } = useSubmitFormData();

  if (state.submitting) {
    return <p className={classes.submittingMessage}>Submitting...</p>;
  }

  if (state.succeeded) {
    return (
      <p className={classes.successMessage}>
        Thank you, <br />
        for submitting your data. <br /> <span>We will reach out to you soon.</span>
      </p>
    );
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className="">
        <label>
          <span>First name</span>
          <ValidationError prefix="First name" field="firstName" errors={state.errors} />
          <Input type="text" placeholder="First name" name="firstName" />
        </label>

        <label>
          <span>Last name</span>
          <ValidationError prefix="Last name" field="lastName" errors={state.errors} />

          <Input type="text" placeholder="Last name" required name="lastName" />
        </label>
      </div>

      <div className="">
        <label>
          <span>10-digit phone</span>
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />

          <Input
            type="text"
            placeholder="Example: 9412343789"
            required
            name="phone"
            maxLength="10"
          />
        </label>

        <label>
          <span>Email</span>
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <Input
            type="text"
            placeholder="Email"
            required
            name="email"
            pattern=".+@.+\..+"
          />
        </label>
      </div>

      <hr />
      {/* full width adress input */}
      <div className="">
        <label className={classes.fullWidthInput}>
          <span>Adress</span>
          <ValidationError prefix="Adress" field="adress" errors={state.errors} />

          <Input
            type="text"
            placeholder="Adress"
            required
            name="adress"
            // {...register('adress', { required: true, minLength: 10 })}
          />
        </label>
      </div>

      <div className="">
        <label>
          <span>City</span>
          <ValidationError prefix="City" field="city" errors={state.errors} />

          <Input type="text" placeholder="City" required name="city" />
        </label>
        <label>
          <span>Zip code</span>
          <ValidationError prefix="Zip code" field="zipcode" errors={state.errors} />

          <Input type="text" placeholder="ZipCode" required name="zipcode" />
        </label>
      </div>

      <button type="submit" disabled={state.submitting}>
        SUBMIT
      </button>
    </form>
  );
};

export default Form;
