import React from "react";
import { Link } from "react-router-dom";

const CheckOut = () => {
  return (
    <div style={styles.cardContainer}>
      <h2 style={styles.question}>Are you sure you want to proceed to payment?</h2>
      <div style={styles.buttonContainer}>
        <Link to="/CardsAccount">
        <button style={{ ...styles.button, ...styles.proceedButton }}>Proceed</button>
        </Link>
        <button style={{ ...styles.button, ...styles.backButton }}>Back</button>
      </div>
    </div>
  );
};

const styles = {
  cardContainer: {
    width: "300px",
    padding: "20px",
    borderRadius: "10px",
    background: "linear-gradient(135deg, #4facfe, #00f2fe)",
    color: "white",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    margin: "20px auto",
  },
  question: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  button: {
    flex: 1,
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  proceedButton: {
    backgroundColor: "#4facfe",
    color: "white",
  },
  backButton: {
    backgroundColor: "#4facfe",
    color: "white",
  },
};

export default CheckOut;
