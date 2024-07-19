import React, { useState } from 'react';
import classes from './ContactUsForm.module.css';
import { useForm } from 'react-hook-form';
import Input from '../../ui/input/Input';

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  // const [formData, setFormData] = useState({});

  const onSubmit = (data) => {
    // setFormData(...data);
    console.log(data);
    reset();
  };
  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <label>
          <span>First name</span>
          <Input
            type="text"
            placeholder="First name"
            {...register('firstName', { required: true, maxLength: 15 })}
          />
        </label>

        <label>
          <span>Last name</span>
          <Input
            type="text"
            placeholder="Last name"
            required
            {...register('lastName', { required: true, maxLength: 20 })}
          />
        </label>
      </div>

      <div className="">
        <label>
          {errors.phone ? (
            <span style={{ color: 'red' }}>Please check your number</span>
          ) : (
            <span>10-digit phone</span>
          )}

          <Input
            type="text"
            placeholder="Example: 9412343789"
            required
            {...register('phone', { required: true, maxLength: 10 })}
          />
        </label>

        <label>
          {errors.email ? (
            <span style={{ color: 'red' }}>Please check your email</span>
          ) : (
            <span>Email</span>
          )}

          <Input
            type="text"
            placeholder="Email"
            required
            {...register('email', {
              required: true,
              pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            })}
          />
        </label>
      </div>

      <hr />
      {/* full width adress input */}
      <div className="">
        <label className={classes.fullWidthInput}>
          <span>Adress</span>
          <Input
            type="text"
            placeholder="Adress"
            required
            {...register('adress', { required: true })}
          />
        </label>
      </div>

      <div className="">
        <label>
          <span>City</span>
          <Input
            type="text"
            placeholder="City"
            required
            {...register('city', { required: true })}
          />
        </label>
        <label>
          <span>Zip code</span>
          <Input
            type="text"
            placeholder="ZipCode"
            required
            {...register('zip', { required: true })}
          />
        </label>
      </div>

      <button>SUBMIT</button>
    </form>
  );
};

export default Form;
