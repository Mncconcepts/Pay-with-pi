import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes, useLocation, Outlet } from "react-router-dom";
import "./index.css";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Navbar/Sidebar";
import Login from "./Components/Navbar/Login";
import SignUp from "./Components/Navbar/SignUp";
import WelcomePage from "./Components/Navbar/WelcomePage";
import Spinner from "./Components/Navbar/Spinner";
import AOS from "aos";
import "aos/dist/aos.css";

const ScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    const navType = performance.getEntriesByType("navigation")[0]?.type;

    if (navType === "back_forward") {
      const savedPosition = sessionStorage.getItem(`scroll-${location.key}`);
      if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition, 10));
      }
    } else {
      window.scrollTo(0, 0);
    }

    const handleScroll = () => {
      sessionStorage.setItem(`scroll-${location.key}`, window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  return null;
};

const PageLoader = ({ children, setLoading }) => {
  const location = useLocation();
  const [showContent, setShowContent] = useState(false);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    setRefresh((prev) => prev + 1);
  }, [location]);

  useEffect(() => {
    setLoading(true);
    setShowContent(false);

    const timer = setTimeout(() => {
      setLoading(false);
      setShowContent(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location, setLoading]);

  return showContent ? children : null;
};

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const handleLogin = (profile) => {
    setUser(profile);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: true,
    });
  }, []);

  const isWelcomePage = location.pathname === "/";

  return (
    <div className={`app ${darkMode ? "dark-mode" : "light-mode"} ${loading ? "loading" : ""}`}>
      <ScrollRestoration />
      {loading && <Spinner />}

      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {!isWelcomePage && (
        <PageLoader setLoading={setLoading}>
          <>
            <Navbar user={user} />
            <div className="main-container">
              <Sidebar />
              <div className="content">
                <Outlet />
              </div>
            </div>
          </>
        </PageLoader>
      )}
    </div>
  );
};

export default App;
