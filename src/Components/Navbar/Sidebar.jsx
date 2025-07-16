import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="cardd">
      <aside className="sidebar">
        <ul>
          <li onClick={() => handleNavigation("/home")} className="clickable">Home</li>
          <li onClick={() => handleNavigation("/passkey")} className="clickable">Dashboard</li>
          <li onClick={() => handleNavigation("/CardsAccount")} className="clickable">Cards & Account</li>
          <li onClick={() => handleNavigation("/submenu")} className="clickable">Add Funds</li>
          <li onClick={() => handleNavigation("/submenu")} className="clickable">Withdraw Funds</li>
          <li onClick={() => handleNavigation("/submenu")} className="clickable">Offers & Rewards</li>
          <li onClick={() => handleNavigation("/Profile")} className="clickable">Settings</li>
          <li onClick={() => handleNavigation("/help")} className="clickable">Help and Support</li>
          <li onClick={() => handleNavigation("/notification")} className="clickable">Notification</li>
          <li onClick={() => handleNavigation("/faq")} className="clickable">FAQ</li>
          <li onClick={() => handleNavigation("/logout")} className="clickable">Log Out</li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
