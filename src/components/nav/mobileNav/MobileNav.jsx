import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence, easeInOut, easeIn } from "framer-motion";
import "./MobileNav.scss";
import { FiMenu } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const MobileNav = ({handleNavigation}) => {
  const [isClicked, setIsClicked] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();
  
  // Helper function to handle navigation clicks
  const handleNavClick = (e, path) => {
    // Prevent ripple if already on the target page
    if (location.pathname === path) {
      e.preventDefault();
      setIsClicked(false);
      return;
    }
    handleNavigation(e, path);
    setIsClicked(false);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  // Close nav when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsClicked(false);
      }
    };

    if (isClicked) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isClicked]);

  return (
    <>
      <div ref={navRef} className="navMobileContainer d-lg-none">
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
              <Link
                to="/"
                onClick={() => setIsClicked(false)}
                className="nav-link linkBrand"
              >
                LIGHTFOLIO
              </Link>

              {/* Mobile links */}
              <div className=" d-flex flex-column">
                <NavLink
                  // onClick={() => setIsClicked(false)}
                  onClick={(e) => handleNavClick(e, "/")}
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "activeMobileLink nav-link mobileLink"
                      : "nav-link mobileLink"
                  }
                >
                  HOME
                </NavLink>
                <NavLink
                  onClick={(e) => handleNavClick(e, "/pricing/client-gallery")}
                  to="/pricing"
                  className={({ isActive }) =>
                    isActive
                      ? "activeMobileLink nav-link mobileLink"
                      : "nav-link mobileLink"
                  }
                >
                  PRICING
                </NavLink>
                <NavLink
                   onClick={(e) => handleNavClick(e, "/gallery/themes")}
                  to="/gallery/themes"
                  className={({ isActive }) =>
                    isActive
                      ? "activeMobileLink nav-link mobileLink"
                      : "nav-link mobileLink"
                  }
                >
                  THEMES
                </NavLink>
                <NavLink
                   onClick={(e) => handleNavClick(e, "/gallery")}
                  to="/gallery"
                  end
                  className={({ isActive }) =>
                    isActive
                      ? "activeMobileLink nav-link mobileLink"
                      : "nav-link mobileLink"
                  }
                >
                  FEATURES
                </NavLink>
                <NavLink
                  onClick={(e) => handleNavClick(e, "/gallery/proofing")}
                  to="/gallery/proofing"
                  className={({ isActive }) =>
                    isActive
                      ? "activeMobileLink nav-link mobileLink"
                      : "nav-link mobileLink"
                  }
                >
                  PROOFING
                </NavLink>
                <NavLink
                 onClick={(e) => handleNavClick(e, "/crm")}
                  to="/crm"
                  end
                  className={({ isActive }) =>
                    isActive
                      ? "activeMobileLink nav-link mobileLink"
                      : "nav-link mobileLink"
                  }
                >
                  CRM
                </NavLink>
                <NavLink
                  onClick={(e) => handleNavClick(e, "/crm/contract")}
                  to="/crm/contract"   
                  className={({ isActive }) =>
                    isActive
                      ? "activeMobileLink nav-link mobileLink"
                      : "nav-link mobileLink"
                  }
                >
                  CONTRACTS
                </NavLink>
                <NavLink
                  onClick={(e) => handleNavClick(e, "/crm/invioce")}
                  to="/crm/invioce"
                  className={({ isActive }) =>
                    isActive
                      ? "activeMobileLink nav-link mobileLink"
                      : "nav-link mobileLink"
                  }
                >
                  INVOICES
                </NavLink>
                <NavLink
                  onClick={(e) => handleNavClick(e, "/crm/session")}
                  to="/crm/session"
                  className={({ isActive }) =>
                    isActive
                      ? "activeMobileLink nav-link mobileLink"
                      : "nav-link mobileLink"
                  }
                >
                  MINI SESSIONS
                </NavLink>
                <NavLink
                  onClick={(e) => handleNavClick(e, "/crm/booking")}
                  to="/crm/booking"
                  className={({ isActive }) =>
                    isActive
                      ? "activeMobileLink nav-link mobileLink"
                      : "nav-link mobileLink"
                  }
                >
                  BOOKING SITE
                </NavLink>
                <NavLink
                  onClick={(e) => handleNavClick(e, "/crm/form")}
                  to="/crm/form"
                  className={({ isActive }) =>
                    isActive
                      ? "activeMobileLink nav-link mobileLink"
                      : "nav-link mobileLink"
                  }
                >
                  FORMS
                </NavLink>
                <NavLink
                  onClick={(e) => handleNavClick(e, "websites")}
                  to="/websites"
                  className={({ isActive }) =>
                    isActive
                      ? "activeMobileLink nav-link mobileLink"
                      : "nav-link mobileLink"
                  }
                >
                  WEBSITES
                </NavLink>
                <NavLink
                  onClick={() => setIsClicked(false)}
                  to=""
                  className= "nav-link mobileLink"
                >
                  Sign Up
                </NavLink>
                <div className="d-flex align-items-center">
                  <NavLink
                    onClick={() => setIsClicked(false)}
                    to=""
                    className= "nav-link mobileLink loginBorder"
                    >
                    LOGIN
                  </NavLink>
                  <div className="mobileIcon">
                    <BsFacebook />
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
