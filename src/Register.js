import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from './api';
import './Register.css';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await registerUser(formData); // Call the registerUser function
      console.log(response); // You can log the response for debugging
      // Handle the response, e.g., show a success message
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Error:', error);
    }
    setRegistrationSuccess(true);

    // After successful registration, navigate to the login page
    navigate('/login');
  };

  

  return (
    <div className='register-container'>
      <h2>Register</h2>
      <form onSubmit={handleRegistration}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
      {registrationSuccess && (
        <p className="registration-success-message">Registration Successful!</p>
      )}
    </div>
  );
}

export default Register;
