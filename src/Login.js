import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLoginSuccess = (token) => {
    // Store the token securely in localStorage
    localStorage.setItem('token', token);
    setLoginSuccess(true);
    // Automatically navigate to the home page after successful login
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a request to the server for login validation
    fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.text(); // Assuming the server sends the JWT token as text
        }
        throw new Error('Login failed');
      })
      .then((token) => {
        handleLoginSuccess(token);
      })
      .catch((error) => {
        setError('Login failed. Please check your credentials.');
        setLoginSuccess(false);
        console.error('Error:', error);
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
        </div>
      </form>
      {error && <p>{error}</p>}
      {loginSuccess && <p>Login Successful</p>}
    </div>
  );
}

export default Login;
