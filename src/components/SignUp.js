import React, { useState } from "react";
import axios from "axios";
import "../App.css"; // Ensure to import the CSS for styling
import { Link } from 'react-router-dom';


const SignUp = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!username.trim()) {
      validationErrors.username = "Username is required";
    }

    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is not valid";
    }

    if (!password.trim()) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters";
    }

    if (!confirmPassword.trim()) {
      validationErrors.confirmPassword = "Confirm Password is required";
    } else if (confirmPassword !== password) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    if (!termsAccepted) {
      validationErrors.termsAccepted = "You must accept the terms and conditions";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted successfully");
      alert("Form Submitted Successfully");

      /* let payload = {
        name: username,
        email: email,
        password: password,
        password_confirmation: confirmPassword
      };

      axios.post('/api/register', payload)
        .then((r) => {
          localStorage.setItem('token', r.data.token);
          navigate("/dashboard");
        })
        .catch((e) => {
          if (e.response.data.errors != undefined) {
            setErrors(e.response.data.errors);
          }
        }); 
      */
    }
  };

  return (
    <div className="form-container" style={{ textAlign: 'center' }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="******"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            I accept the terms and conditions
          </label>
          {errors.termsAccepted && <div className="error">{errors.termsAccepted}</div>}
        </div>

        <button className="button-container"
        type="submit">Sign Up</button>
        <div className="form-group">
        <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
        
      </form>
    </div>
  );
};

export default SignUp;
