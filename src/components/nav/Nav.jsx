import { Link, NavLink } from "react-router-dom";
import "./Nav.scss";
import { useState, useEffect } from "react";
import { LiaDownloadSolid } from "react-icons/lia";
import { LuChartNoAxesCombined, LuGalleryHorizontalEnd } from "react-icons/lu";
import { BsShopWindow } from "react-icons/bs";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { IoShapesOutline } from "react-icons/io5";
import SubNavInfo from "../nav/subnavinfo/SubNavInfo";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MobileNav from "./mobileNav/MobileNav";

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);

  const handleActiveDropdown = (drop) => {
    setIsDropdownOpen(drop);
  };

  const handleInactiveDropdown = () => {
    setIsDropdownOpen(null);
  };

  return (
    <>
      {/* Mobile Nav */}
      <MobileNav />

      {/* Desktop Nav */}
      <nav className="navbar navbar-expand-lg mainNav">
        <div className="container py-2 pt-3">
          <Link to="/" className="navbar-brand d-none d-lg-inline-block">
            <img
              src="../folio images/logo-dark.png"
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
              >
                PRICING
              </NavLink>

              {/* Gallery dropdown */}
              <div
                className="dropdown"
                onMouseEnter={() => handleActiveDropdown("gallery")}
                onMouseLeave={handleInactiveDropdown}
              >
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    isActive
                      ? "activeLinkStyle nav-link linkStyle px-0"
                      : "nav-link linkStyle px-0"
                  }
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
                    >
                      <SubNavInfo
                        icon={<LiaDownloadSolid />}
                        header={"Digital Downloads"}
                        title={"Allow client photo downloads"}
                      />
                    </Link>

                    <Link
                      to="/gallery/visitor-analysis"
                      className="nav-link px-3 py-0"
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
                onMouseEnter={() => handleActiveDropdown("CRM")}
                onMouseLeave={handleInactiveDropdown}
              >
                <NavLink
                  to="/crm"
                  className={({ isActive }) =>
                    isActive
                      ? "activeLinkStyle nav-link linkStyle px-0"
                      : "nav-link linkStyle px-0"
                  }
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
                            to="/crm/studio-manager"
                            className="nav-link p-0 m-0"
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
                            to="/crs/contract"
                            className="nav-link p-0 m-0 ps-1"
                          >
                            <SubNavInfo
                              icon={<LuGalleryHorizontalEnd />}
                              header={"Contracts"}
                              title={"10+ free photography contract template"}
                            />
                          </Link>
                        </div>

                        <div className="col-6 mb-lg-3">
                          <Link to="/crs/invioce" className="nav-link p-0 m-0">
                            <SubNavInfo
                              icon={<LuGalleryHorizontalEnd />}
                              header={"Invoices"}
                              title={"Send invoices and collect payment online"}
                            />
                          </Link>
                        </div>

                        <div className="col-6 mb-lg-3">
                          <Link
                            to="/crs/booking"
                            className="nav-link p-0 m-0 ps-1"
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
                          <Link to="/crs/session" className="nav-link p-0 m-0">
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
                            to="/crs/form"
                            className="nav-link p-0 m-0 ps-1"
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
                to="/website"
                className={({ isActive }) =>
                  isActive
                    ? "activeLinkStyle nav-link linkStyle px-0"
                    : "nav-link linkStyle px-0"
                }
              >
                WEBSITES
              </NavLink>
            </div>
            {/* login and sign-up group */}
            <div className=" d-flex ms-auto gap-3 text-center align-items-center">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "activeLinkStyle nav-link linkStyle px-0"
                    : "nav-link linkStyle px-0"
                }
              >
                LOGIN
              </NavLink>
              <Link to="/website" className="signUp nav-link px-3">
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
