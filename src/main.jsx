import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';



import {
  createHashRouter,
  HashRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home/Home.jsx";
import Dashboard from './Components/Navbar/Dashboard.jsx';
import Transaction from './Utilities/Transaction.jsx';
import CardsAccount from './Utilities/CardsAccount.jsx';
import Data from './Utilities/Data.jsx';
import Airtime from './Utilities/Airtime.jsx';
import Login from './Components/Navbar/Login.jsx';
import SignUp from './Components/Navbar/SignUp.jsx';
import Logout from './Components/Navbar/Logout.jsx';
import SubMenu from './Components/Navbar/SubMenu.jsx';
import WelcomePage from './Components/Navbar/WelcomePage.jsx';
import Profile from './Components/Navbar/Profile.jsx';
import AboutUs from './About/AboutUs.jsx';
import ContactUs from './ContactPage/ContactUs.jsx';
import Faq from './Components/Navbar/Faq.jsx';
import Notification from './Components/Navbar/Notification.jsx';
import Help from './Components/Navbar/Help.jsx';
import TermsConditions from './Components/Navbar/TermsConditions.jsx';
import Spinner from './Components/Navbar/Spinner.jsx';
import ForgotPassword from './Components/Navbar/ForgotPassword.jsx';



const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/about",
        element: <AboutUs/>
      },
      {
        path: "/contact",
        element: <ContactUs/>
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: "/transactions",
        element: <Transaction />
      },
      {
        path: "/CardsAccount",
        element: <CardsAccount />
      },
      {
        path: "/data",
        element: <Data />
      },
      {
       path: "/airtime",
       element: <Airtime />
      },
      {
        path: "/submenu",
        element: <SubMenu/>
      },
      {
        path: "/profile",
        element: <Profile/>
      },
      {
        path: "help",
        element: <Help/>
      },
      {
        path: "/faq",
        element: <Faq/>
      },
      {
        path: "/notification",
        element: <Notification/>
      }

    ],
  },

  {
    path: "welcomepage",
    element: <WelcomePage/>
  },
  {
    path: "spinner",
    element: <Spinner/>
  },
  {
    path: "termsconditions",
    element: <TermsConditions/>
  },

  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "forgotpassword",
    element: <ForgotPassword/>
  },
  {
    path: "/signup",
    element: <SignUp/>
  },
  {
    path: "/logout",
    element: <Logout/>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

);