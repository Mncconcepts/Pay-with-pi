import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isCheckmarkVisible, setIsCheckmarkVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false); // State for checkbox
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // Handle checkbox change
  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = formData;
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.email === email.trim());

    if (!user) {
      setError("No account found with this email. Please sign up.");
      return;
    }

    if (user.password !== password) {
      setError("Incorrect password. Please try again.");
      return;
    }

    setIsLoading(true);
    setError("");

    setTimeout(() => {
      setIsLoading(false);
      setIsCheckmarkVisible(true);

      if (rememberMe) {
        localStorage.setItem("rememberMe", JSON.stringify(user));
      }

      localStorage.setItem("loggedInUser", JSON.stringify(user));

      setTimeout(() => {
        navigate("/home");
      }, 2000);
    }, 1500);
  };

  // Handle Google Sign-in (Simulated)
  const handleGoogleSignIn = () => {
    alert("Google Sign-in is currently under development.");
  };

  return (
    <div className="bodyyyy">
      {isLoading && (
        <div className="loading-animation">
          <div className="circle-loader"></div>
          <p>Logging in...</p>
        </div>
      )}

      {isCheckmarkVisible && (
        <div className="success-message">
          <div className="circle-loader load-complete">
            <div className="checkmark draw"></div>
          </div>
          <p>Congratulations! You are logged in successfully.</p>
        </div>
      )}

      {!isLoading && !isCheckmarkVisible && (
        <div className="form-container">
          <div className="form-header">
            <i className="fas fa-user"></i>
            <h2>Login</h2>
          </div>
          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="form-group">
              <input
                type="text"
                name="email"
                placeholder="Username or Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <i className="fas fa-user"></i>
            </div>

            {/* Password Field */}
            <div className="form-group">
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

            {/* Remember Me Checkbox */}
            <div className="remember-forgot-container">
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
              <Link to="/forgot-password" className="forgot-password">
                Forgot Password?
              </Link>
            </div>

            {/* Error Message */}
            {error && <div className="error-message">{error}</div>}

            {/* Login Button */}
            <button type="submit" className="login-button">
              Login
            </button>

            {/* Google Sign-in Button */}
            <button type="button" className="google-button" onClick={handleGoogleSignIn}>
              <i className="fab fa-google"></i> Sign in with Google
            </button>
          </form>

          {/* Register Link */}
          <div className="register">
            Do not have an account? <Link to="/signup">Register Here</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
