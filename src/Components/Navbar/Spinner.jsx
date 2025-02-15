import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner-card">
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default Spinner;
