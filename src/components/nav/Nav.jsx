import { Link, NavLink, useLocation } from "react-router-dom";
import "./Nav.scss";
import { useState, useEffect, useRef } from "react";
import { LiaDownloadSolid } from "react-icons/lia";
import { LuChartNoAxesCombined, LuGalleryHorizontalEnd } from "react-icons/lu";
import { BsShopWindow } from "react-icons/bs";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { IoShapesOutline } from "react-icons/io5";
import SubNavInfo from "../nav/subnavinfo/SubNavInfo";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MobileNav from "./mobileNav/MobileNav";

const Nav = ({ handleNavigation }) => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const closeTimeout = useRef(null);
  const hoverTimeout = useRef(null);

  // Helper function to handle navigation clicks
  const handleNavClick = (e, path) => {
    // Prevent ripple if already on the target page
    if (location.pathname === path) {
      e.preventDefault();
      return;
    }
    handleNavigation(e, path);
  };

  // Handle different close types
  const handleDelayedClose = () => {
    // For click-triggered closes
    closeTimeout.current = setTimeout(() => {
      setIsDropdownOpen(null);
    }, 1000);
  };

  const handleImmediateClose = () => {
    // For hover-triggered closes
    clearTimeout(closeTimeout.current);
    clearTimeout(hoverTimeout.current);
    setIsDropdownOpen(null);
  };

  // Handle dropdown interactions
  const handleActiveDropdown = (drop) => {
    clearTimeout(hoverTimeout.current);
    setIsDropdownOpen(drop);
  };

  const handleDropdownHoverOut = () => {
    // Start hover-out timeout
    hoverTimeout.current = setTimeout(() => {
      handleImmediateClose();
    }, 1000); // 1 second hover grace period
  };

  // Cleanup timeouts
  useEffect(() => {
    return () => {
      clearTimeout(closeTimeout.current);
      clearTimeout(hoverTimeout.current);
    };
  }, []);

  return (
    <>
      {/* Mobile Nav */}
      <MobileNav handleNavigation={handleNavigation} />

      {/* Desktop Nav */}
      <nav className="navbar navbar-expand-lg mainNav">
        <div className="container py-2 pt-3">
          <Link
            to="/"
            className="navbar-brand d-none d-lg-inline-block"
            onClick={(e) => handleNavClick(e, "/")}
          >
            <img
              src="folioImages/logo-dark.png"
              className="logoSize pb-1 me-2"
              alt="logo"
            />
          </Link>

          <div className="navbar-nav d-flex w-100 align-items-center d-none d-lg-flex">
            <div className="d-flex flex-row gap-4">
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  isActive
                    ? "activeLinkStyle nav-link linkStyle px-0"
                    : "nav-link linkStyle px-0"
                }
                onClick={(e) => handleNavClick(e, "/pricing")}
              >
                PRICING
              </NavLink>

              {/* Gallery dropdown */}
              <div
                className="dropdown"
                onMouseEnter={() => {
                  handleActiveDropdown("gallery");
                }}
                onMouseLeave={handleDropdownHoverOut}
              >
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    isActive
                      ? "activeLinkStyle nav-link linkStyle px-0"
                      : "nav-link linkStyle px-0"
                  }
                  onClick={(e) => handleNavClick(e, "/gallery")}
                >
                  GALLERIES
                  <span className="dropdown-toggle ms-1"></span>
                </NavLink>

                {isDropdownOpen === "gallery" && (
                  <div className="dropdown-menu show galleryBox py-lg-3">
                    <div className="vstack gap-3">
                      <Link
                        to="/gallery/proofing"
                        className="nav-link px-3 py-0"
                        onClick={(e) => {
                          handleNavClick(e, "/gallery/proofing");
                          handleDelayedClose();
                        }}
                      >
                        <SubNavInfo
                          icon={<LuGalleryHorizontalEnd />}
                          header={"Proofing"}
                          title={"Easy online photo proofing"}
                        />
                      </Link>

                      <Link
                        to="/gallery/digital-download"
                        className="nav-link px-3 py-0"
                        onClick={(e) => {
                          handleNavClick(e, "/gallery/digital-download");
                          handleDelayedClose();
                        }}
                      >
                        <SubNavInfo
                          icon={<LiaDownloadSolid />}
                          header={"Digital Downloads"}
                          title={"Allow client photo downloads"}
                        />
                      </Link>

                      <Link
                        to="/gallery/visitor-analytics"
                        className="nav-link px-3 py-0"
                        onClick={(e) => {
                          handleNavClick(e, "/gallery/visitor-analytics");
                          handleDelayedClose();
                        }}
                      >
                        <SubNavInfo
                          icon={<LuChartNoAxesCombined />}
                          header={"Visitor Analystics"}
                          title={"Gallery visitor stats"}
                        />
                      </Link>

                      <Link
                        to="/gallery/online-store"
                        className="nav-link px-3 py-0"
                        onClick={(e) => {
                          handleNavClick(e, "/gallery/online-store");
                          handleDelayedClose();
                        }}
                      >
                        <SubNavInfo
                          icon={<BsShopWindow />}
                          header={"Online Store"}
                          title={"Set up shop"}
                        />
                      </Link>

                      <Link
                        to="/gallery/directories"
                        className="nav-link px-3 py-0"
                        onClick={(e) => {
                          handleNavClick(e, "/gallery/directories");
                          handleDelayedClose();
                        }}
                      >
                        <SubNavInfo
                          icon={<MdOutlinePhotoLibrary />}
                          header={"Gallery Directories"}
                          title={"Gallery websites"}
                        />
                      </Link>

                      <Link
                        to="/gallery/themes"
                        className="nav-link px-3 py-0"
                        onClick={(e) => {
                          handleNavClick(e, "/gallery/themes");
                          handleDelayedClose();
                        }}
                      >
                        <SubNavInfo
                          icon={<IoShapesOutline />}
                          header={"Themes"}
                          title={"Customize your galleries"}
                        />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* CRM dropdown */}
              <div
                className="dropdown"
                onMouseEnter={() => {
                  handleActiveDropdown("CRM");
                }}
                onMouseLeave={handleDropdownHoverOut}
              >
                <NavLink
                  to="/crm"
                  className={({ isActive }) =>
                    isActive
                      ? "activeLinkStyle nav-link linkStyle px-0"
                      : "nav-link linkStyle px-0"
                  }
                  onClick={(e) => {
                    handleNavClick(e, "/crm");
                  }}
                >
                  CRM
                  <span className="dropdown-toggle ms-1"></span>
                </NavLink>
                {isDropdownOpen === "CRM" && (
                  <div className="dropdown-menu show crmBox">
                    <div className="container">
                      <div className="row py-lg-3 px-lg-2">
                        <div className="col-6 mb-lg-3">
                          <Link
                            to="/crm"
                            className="nav-link p-0 m-0"
                            onClick={(e) => {
                              handleNavClick(e, "/crm");
                              handleDelayedClose();
                            }}
                          >
                            <SubNavInfo
                              icon={<LuGalleryHorizontalEnd />}
                              header={"Studio Manager"}
                              title={
                                "CRS built to serve the needs of photographers"
                              }
                            />
                          </Link>
                        </div>

                        <div className="col-6 mb-lg-3">
                          <Link
                            to="/crm/contract"
                            className="nav-link p-0 m-0 ps-1"
                            onClick={(e) => {
                              handleNavClick(e, "/crm/contract");
                              handleDelayedClose();
                            }}
                          >
                            <SubNavInfo
                              icon={<LuGalleryHorizontalEnd />}
                              header={"Contracts"}
                              title={"10+ free photography contract template"}
                            />
                          </Link>
                        </div>

                        <div className="col-6 mb-lg-3">
                          <Link
                            to="/crm/invioce"
                            className="nav-link p-0 m-0"
                            onClick={(e) => {
                              handleNavClick(e, "/crm/invioce");
                              handleDelayedClose();
                            }}
                          >
                            <SubNavInfo
                              icon={<LuGalleryHorizontalEnd />}
                              header={"Invoices"}
                              title={"Send invoices and collect payment online"}
                            />
                          </Link>
                        </div>

                        <div className="col-6 mb-lg-3">
                          <Link
                            to="/crm/booking"
                            className="nav-link p-0 m-0 ps-1"
                            onClick={(e) => {
                              handleNavClick(e, "/crm/booking");
                              handleDelayedClose();
                            }}
                          >
                            <SubNavInfo
                              icon={<LuGalleryHorizontalEnd />}
                              header={"Booking Site"}
                              title={
                                "Set your availability and start booking 24x7"
                              }
                            />
                          </Link>
                        </div>

                        <div className="col-6">
                          <Link
                            to="/crm/session"
                            className="nav-link p-0 m-0"
                            onClick={(e) => {
                              handleNavClick(e, "/crm/session");
                              handleDelayedClose();
                            }}
                          >
                            <SubNavInfo
                              icon={<LuGalleryHorizontalEnd />}
                              header={"Mini Sessions"}
                              title={
                                "Creat your next mini session. A dozen examples to get started"
                              }
                            />
                          </Link>
                        </div>

                        <div className="col-6">
                          <Link
                            to="/crm/form"
                            className="nav-link p-0 m-0 ps-1"
                            onClick={(e) => {
                              handleNavClick(e, "/crm/form");
                              handleDelayedClose();
                            }}
                          >
                            <SubNavInfo
                              icon={<LuGalleryHorizontalEnd />}
                              header={"Forms"}
                              title={
                                "Dozens of free form and questionnaire templates"
                              }
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <NavLink
                to="/websites"
                className={({ isActive }) =>
                  isActive
                    ? "activeLinkStyle nav-link linkStyle px-0"
                    : "nav-link linkStyle px-0"
                }
                onClick={(e) => {
                  handleNavClick(e, "/websites");
                }}
              >
                WEBSITES
              </NavLink>
            </div>
            {/* login and sign-up group */}
            <div className=" d-flex ms-auto gap-3 text-center align-items-center">
              <NavLink to="" className="nav-link linkStyle px-0">
                LOGIN
              </NavLink>
              <Link to="" className="signUp nav-link px-3">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
