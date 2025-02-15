import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import Footer from '../Components/Navbar/Footer';


const CardsAccount = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setactiveTab] = useState("visa");

  //handle Tab change
  const handleTabChange = (tabId) => {
    setactiveTab(tabId)
  }

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(true);



  return (
    <div className='hero-text'>
    <h1>
      THIS SECTION IS COMING
    </h1>
      <Footer />
    </div>
  )
}

export default CardsAccount;