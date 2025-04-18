import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isCheckmarkVisible, setIsCheckmarkVisible] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false); // New state for "Forgot Password" checkbox
  const navigate = useNavigate();

  // Handle form data changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value.trim(),
    }));
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // Handle Forgot Password Checkbox
  const handleForgotPasswordChange = () => {
    setForgotPassword(!forgotPassword);
  };

  // Validate password
  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,11}$/;
    return regex.test(password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { fullName, email, password } = formData;

    if (!fullName || !email || !password) {
      setError("All fields are required.");
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must be 6-11 characters long, contain at least one number, one uppercase letter, and one special character.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const isEmailTaken = users.some((user) => user.email === email);

    if (isEmailTaken) {
      setError("Email is already registered. Please use a different email.");
      return;
    }

    const newUser = { fullName, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    setError(""); // Clear previous error

    // Display loader and success animation
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsCheckmarkVisible(true); // Show checkmark

      // Redirect to login page after success animation
      setTimeout(() => {
        setIsCheckmarkVisible(false); // Hide checkmark
        navigate("/login");
      }, 2000);
    }, 1500); // Wait 1.5 seconds for loader
  };

  // Handle Social Sign-ins
  const handleGoogleSignIn = () => {
    alert("Google Sign-in is under development.");
  };

  const handleFacebookSignIn = () => {
    alert("Facebook Sign-in is under development.");
  };

  const handleTwitterSignIn = () => {
    alert("Twitter Sign-in is under development.");
  };

  return (
    <div className="bodyyy">
      {isLoading && (
        <div className="loadings-container">
          <div className="circles-loader"></div>
          <p>Signing up...</p>
        </div>
      )}

      {isCheckmarkVisible && (
        <div className="success-container">
          <div className="circles-loader load-complete">
            <div className="checkmarks draw"></div>
          </div>
          <p>Signup Successful!</p>
        </div>
      )}
      {!isLoading && !isCheckmarkVisible && (
        <div className="forms-container">
          <div className="forms-header">
            <i className="fas fa-user-plus"></i>
            <h2 className="sub-head">Create Your Account</h2>
          </div>
          <form  action="action.php" onSubmit={handleSubmit}>
            <div className="forms-group">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <i className="fas fa-user"></i>
            </div>
            <div className="forms-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <i className="fas fa-envelope"></i>
            </div>
            <div className="forms-group">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <i
                className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              ></i>
            </div>

            {error && <div className="errors-message">{error}</div>}

            <button type="submit" className="signup-button">
              Sign Up
            </button>

            {/* Social Media Login Options */}
            <div className="social-signup">
              <p>Or continue with:</p>
              <div className="social-buttons">
                <button type="button" className="googlee-button" onClick={handleGoogleSignIn}>
                  <i className="fab fa-google"></i> Google
                </button>
                <button type="button" className="facebook-button" onClick={handleFacebookSignIn}>
                  <i className="fab fa-facebook"></i> Facebook
                </button>
                <button type="button" className="twitter-button" onClick={handleTwitterSignIn}>
                  <i className="fab fa-twitter"></i> Twitter
                </button>
              </div>
            </div>
          </form>

          <div className="forms-footer">
            Already have an account? <Link to="/login">Login Here</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
