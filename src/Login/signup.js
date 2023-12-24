import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Login/signup.css';

export default function Signup() {
  const [data, setData] = useState([]); // Define the 'data' variable
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  }); // Use useState for managing user input

  const handleInputs = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value }); // Update 'user' state with new values
  };

  const addData = (e) => {
    e.preventDefault();

    const { name, email, password } = user;
    // Validate user inputs
    if (!name) {
      alert('Name field is required');
      return;
    }

    if (!email) {
      alert('Email field is required');
      return;
    }

    if (!email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    if (!password) {
      alert('Password field is required');
      return;
    }

    if (password.length < 6) {
      alert('Password length should be greater than 5');
      return;
    }

    // Proceed with registration
    console.log('Data added successfully');
    setData([...data, user]); // Add user data to the 'data' array
    localStorage.setItem('userkey', JSON.stringify([...data, user])); // Store user data in localStorage
  };

  return (
    <>
      <div className="log-box">
        <h1>Welcome to Auction10</h1>
        <div className="log-container">
          <h2>Sign Up</h2>
          <form method="POST">
            <h4>Enter your Name:</h4>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputs}
            ></input>
            <h4>Enter your Email:</h4>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputs}
            ></input>
            <h4>Create Password:</h4>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputs}
            ></input>
            <Link to="/OTP">
              <button onClick={addData} className="button sign-in-button">
                Next
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
