import React from 'react';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFormData } from "../Redux/store";
import './form.css';

const Form = () => {
  const dispatch = useDispatch();


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    company: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    address: "",
    company: "",
    phone: "",
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    let valid = true;
    let tempErrors = { ...errors };

    if (!formData.firstName) {
      tempErrors.firstName = "First Name is required!";
      valid = false;
    }

    if (!formData.lastName) {
      tempErrors.lastName = "Last Name is required!";
      valid = false;
    }

    if (!formData.address) {
      tempErrors.address = "Address is required!";
      valid = false;
    }

    if (!formData.company) {
      tempErrors.company = "Company is required!";
      valid = false;
    }

    const phoneRegex = /^[0-9]{11}$/;
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      tempErrors.phone = "Phone Number should be 11 digits!";
      valid = false;
    }

    setErrors(tempErrors);

    // If valid, dispatch to Redux store
    if (valid) {
      dispatch(addFormData(formData)); // Dispatch to Redux
      // Reset form after submission
      setFormData({
        firstName: "",
        lastName: "",
        address: "",
        company: "",
        phone: "",
      });
    }
  };

  return (
    <div className='form-wrap'>
      <h2 className='form-heading'>Form</h2>
      <form onSubmit={handleSubmit} className='form'>
        <div className='input-wrap'>
          <label>Enter First Name:</label>
          <input
            type="text"
            name="firstName"
            placeholder='First Name'
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          {errors.firstName && <p>{errors.firstName}</p>}
        </div>

        <div className='input-wrap'>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            placeholder='Enter Last Name'
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          {errors.lastName && <p>{errors.lastName}</p>}
        </div>

        <div className='input-wrap'>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            placeholder='Enter Address'
            value={formData.address}
            onChange={handleChange}
            required
          />
          {errors.address && <p>{errors.address}</p>}
        </div>

        <div className='input-wrap'>
          <label>Company:</label>
          <input
            type="text"
            name="company"
            placeholder='Enter Company Name'
            value={formData.company}
            onChange={handleChange}
            required
          />
          {errors.company && <p>{errors.company}</p>}
        </div>

        <div className='input-wrap'>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phone"
            placeholder='Enter Phone Number'
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <p>{errors.phone}</p>}
        </div>

        <div className="button-wrap">
          <button type="submit"  className='button'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
