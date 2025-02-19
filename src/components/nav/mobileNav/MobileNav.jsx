import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, easeInOut, easeIn } from "framer-motion";
import "./MobileNav.scss";
import { FiMenu } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const MobileNav = () => {
  const [isClicked, setIsClicked] = useState(false);

 
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      <div className="navMobileContainer pb-5 d-lg-none">
        <div onClick={handleClick} className="mobileNavIcon ms-auto p-1 me-2">
          <FiMenu className="bg-dark text-light fs-1 px-2 rounded" />
        </div>
        <AnimatePresence>
          {isClicked && (
            <motion.div
              className="w-100 MobileGroup"
              initial={{ y: -700 }}
              animate={{ y: 0 }}
              exit={{ y: -700 }}
              transition={{ duration: 0.5, ease: easeInOut }}
            >
              {/* Brand link */}
              <Link to="/" className="nav-link linkBrand">
                LIGHTFOLIO
              </Link>

              {/* Mobile links */}
              <div className=" d-flex flex-column">
                <Link to="/" className="nav-link mobileLink">
                  HOME
                </Link>
                <Link to="/pricing" className="nav-link mobileLink">
                  PRICING
                </Link>
                <Link to="/theme" className="nav-link mobileLink">
                  THEMES
                </Link>
                <Link to="/feature" className="nav-link mobileLink">
                  FEATURES
                </Link>
                <Link to="/proofing" className="nav-link mobileLink">
                  PROOFING
                </Link>
                <Link to="/crm" className="nav-link mobileLink">
                  CRM
                </Link>
                <Link to="/contract" className="nav-link mobileLink">
                  CONTRACTS
                </Link>
                <Link to="/invoice" className="nav-link mobileLink">
                  INVOICES
                </Link>
                <Link to="/session" className="nav-link mobileLink">
                  MINI SESSIONS
                </Link>
                <Link to="/booking" className="nav-link mobileLink">
                  BOOKING SITE
                </Link>
                <Link to="/form" className="nav-link mobileLink">
                  FORMS
                </Link>
                <Link to="/website" className="nav-link mobileLink">
                  WEBSITES
                </Link>
                <Link to="/sign-up" className="nav-link mobileLink">
                  Sign Up
                </Link>
                <div className="d-flex align-items-center">
                  <Link to="/login" className="nav-link mobileLink loginBorder">
                    LOGIN
                  </Link>
                  <div className="mobileIcon">
                    <BsFacebook  />
                  </div>
                  <div className="mobileIcon">
                    <FaInstagram />
                  </div>
                  <div className="mobileIcon"> 
                    <FaTwitter />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default MobileNav;
