import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.scss";
import { GrBlog } from "react-icons/gr";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { link } from "framer-motion/client";
const getDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  return year;
};

// Footer data structure
const footer = {
  header1: {
    header: "Client Galleries",
    id: "header1",

    sublink: [
      { title: "Feature List", route: "/gallery" },
      { title: "Proofing", route: "/gallery/proofing" },
      { title: "Client Downloads", route: "/gallery/digital-download" },
      { title: "Themes", route: "/gallery/themes" },
      { title: "Online Store", route: "/gallery/online-store" },
      { title: "Visitor Analytics", route: "/gallery/visitor-analytics" },
      { title: "Gallery Directories", route: "/gallery/directories" },
    ],
  },
  header2: {
    header: "Pricing",
    id: "header2",
    route: "/pricing"
  },
  header3: {
    header: "Websites",
    id: "header3",
    route: "/websites"
  },
  header4: {
    header: "Studio Manager",
    id: "header4",

    sublink: [
      { title: "Photography Crm", route: "/crm" },
      { title: "Invoices", route: "/crm/invioce" },
      { title: "Booking Site", route: "/crm/booking" },
    ],
  },
  header5: {
    header: "Contracts",
    id: "header5",

    sublink: [
      { title: "Contracts", route: "/crm/contract" },
      { title: "Wedding Contract", route: null },
      { title: "Portrait Contract", route: null },
      { title: "Boudior Contract", route: null },
      { title: "Engagement Shoot", route: null },
      { title: "Print Release", route: null },
      { title: "Event Contract", route: null },
      { title: "Commercial Contract", route: null },
      { title: "Real Estate Contract", route: null },
      { title: "Second Shooter", route: null },
      { title: "Photo Booth Contract", route: null },
    ],
  },
  header6: {
    header: "Forms",
    id: "header6",

    sublink: [
      { title: "Forms", route: "/crm/form" },
      { title: "Photograpy Client", route: null },
      { title: "Questionaire", route: null },
      { title: "Wedding Day", route: null },
      { title: "Boudoir Questionaire", route: null },
      { title: "Family Portrait", route: null },
      { title: "Senior Portrait", route: null },
      { title: "Photo Booking Form", route: null },
      { title: "Contact Form", route: null },
      { title: "Photo Booth Rantal", route: null },
      { title: "Photo Order Form", route: null },
    ],
  },
  header7: {
    header: "Releases",
    id: "header7",

    sublink: [
      { title: "Model Release", route: null },
      { title: "Minor Model Release", route: null },
      { title: "Boudior Release", route: null },
      { title: "Social Media Release", route: null },
      { title: "Video Release", route: null },
      { title: "Copyright Release", route: null },
      { title: "Daycare Release", route: null },
      { title: "Employee Release", route: null },
    ],
  },
  header8: {
    header: "Mini Sessions",
    id: "header8",

    sublink: [
      { title: "Mini Sessions", route: "/crm/session" },
      { title: "Christmas Minis", route: null },
      { title: "Fall Minis", route: null },
      { title: "Boudior Minis", route: null },
    ],
  },
  header9: {
    header: "Support",
    id: "header9",

    sublink: [
      { title: "Knowledge Base", route: null },
      { title: "Privacy Policy", route: null },
      { title: "Terms of Use", route: null },
      { title: "hello@clonefolio.com", route: null },
    ],
  },
  header10: {
    header: "Follow Us",
    id: "header10",

    sublink: [
      { title: "Blog", icon: <GrBlog />, route: null },
      {
        title: "Facebook",
        icon: <IoLogoFacebook />,
        route: null,
      },
      {
        title: "Instagram",
        icon: <FaInstagram />,
        route: null,
      },
      { title: "Twitter", icon: <FaTwitter />, route: null },
    ],
  },
};

const Footer = ({ handleNavigation }) => {
  const location = useLocation();

  // Helper function to handle navigation clicks
  const handleNavClick = (e, path) => {
    // Prevent ripple if already on the target page
    if (location.pathname === path) {
      e.preventDefault();
      return;
    }
    handleNavigation(e, path);
  };
  const [currentYear, setCurrentYear] = useState(getDate());
  return (
    <>
      <div className="footerBg">
        <div className="container">
          <div className="vstack align-items-center py-5">
            <h2 className="colorWhite">Join Now for FREE</h2>
            <p className="line my-4 colorWhite"></p>
            <h4 className="colorBlack-600"> No credit card required</h4>
            <div>
              <button className="footerBtn mt-4">GET STARTED</button>
            </div>
          </div>

          {/* footer grid */}
          <div className="py-5 d-none d-sm-block">
            <div className="row">
              {/* First col */}
              <div className="col-4 col-lg-2 px-2">
                <div className="vstack colorBlack-600 gap-2">
                  <Link to={'/'}
                   onClick={(e) => handleNavClick(e, "/")}
                  >
                  <img
                    src="/public/folio images/logo (1).png"
                    className="img-fluid w-50"
                    alt="Logo"
                  />
                  </Link>
                  {/* <img
                    src="/public/folio images/logo (1).png"
                    className="img-fluid w-50"
                    alt="Logo"
                  /> */}
                  <p>A software platform for photographers.</p>
                  <p>
                    <span className="styleC">c</span> Lightfolio {currentYear}
                  </p>
                </div>
              </div>

              {/* Second col */}
              <div className="col-4 col-lg-2 px-2">
                <div className="vstack colorBlack-500">
                  {/* Client Gallery */}
                  <h5
                    className="fontPrimary text-uppercase"
                    key={footer.header1.id}
                  >
                    {footer.header1.header}
                  </h5>
                  <ul className="list-unstyled">
                    {footer.header1.sublink.map((link) => (
                      <li key={link.route} className="mb-2">
                        <Link
                          to={link.route}
                          onClick={(e) => {
                            if (link.route !== null)
                              handleNavClick(e, link.route);
                          }}
                          className="text-decoration-none colorBlack-500"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* Pricing */}
                  <h5
                    className="fontPrimary mt-1 text-uppercase"
                    key={footer.header2.id}
                  >
                   <Link 
                   to={footer.header2.route}
                   onClick={(e) => handleNavClick(e, footer.header2.route)}
                   className="text-decoration-none fontPrimary"> {footer.header2.header}</Link> 
                  </h5>

                  {/* Website */}
                  <h5
                    className="fontPrimary mt-4 text-uppercase"
                    key={footer.header3.id}
                  >
                   <Link
                   to={footer.header3.route}
                   onClick={(e) => handleNavClick(e, footer.header3.route)}
                   className="text-decoration-none fontPrimary"
                   > {footer.header3.header}</Link> 
                  </h5>

                  {/* Studio Manager */}
                  <h5
                    className="fontPrimary mt-4 text-uppercase"
                    key={footer.header4.id}
                  >
                    {footer.header4.header}
                  </h5>
                  <ul className="list-unstyled">
                    {footer.header4.sublink.map((link) => (
                      <li key={link.route} className="mb-2">
                        <Link
                          to={link.route}
                          onClick={(e) => {
                            if (link.route !== null)
                              handleNavClick(e, link.route);
                          }}
                          className="text-decoration-none colorBlack-500"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Third col */}
              <div className="col-4 col-lg-2 px-2">
                <div className="vstack colorBlack-500">
                  {/* Contract */}
                  <h5
                    className="fontPrimary text-uppercase"
                    key={footer.header5.id}
                  >
                    {footer.header5.header}
                  </h5>
                  <ul className="list-unstyled">
                    {footer.header5.sublink.map((link) => (
                      <li key={link.route} className="mb-2">
                        <Link
                          to={link.route}
                          onClick={(e) => {
                            if (link.route !== null)
                              handleNavClick(e, link.route);
                          }}
                          className="text-decoration-none colorBlack-500"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Forth col */}
              <div className="col-4 col-lg-2 px-2 mt-sm-5 mt-lg-0">
                <div className="vstack colorBlack-500">
                  {/* Forms */}
                  <h5
                    className="fontPrimary text-uppercase"
                    key={footer.header6.id}
                  >
                    {footer.header6.header}
                  </h5>
                  <ul className="list-unstyled">
                    {footer.header6.sublink.map((link) => (
                      <li key={link.route} className="mb-2">
                        <Link
                          to={link.route}
                          onClick={(e) => {
                            if (link.route !== null)
                              handleNavClick(e, link.route);
                          }}
                          className="text-decoration-none colorBlack-500"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Fifth col */}
              <div className="col-4 col-lg-2 px-2 mt-sm-5 mt-lg-0">
                <div className="vstack colorBlack-500">
                  {/* Releases */}
                  <h5
                    className="fontPrimary text-uppercase"
                    key={footer.header7.id}
                  >
                    {footer.header7.header}
                  </h5>
                  <ul className="list-unstyled">
                    {footer.header7.sublink.map((link) => (
                      <li key={link.route} className="mb-2">
                        <Link
                          to={link.route}
                          onClick={(e) => {
                            if (link.route !== null)
                              handleNavClick(e, link.route);
                          }}
                          className="text-decoration-none colorBlack-500"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* Mini Session */}

                  <h5
                    className="fontPrimary text-uppercase"
                    key={footer.header8.id}
                  >
                    {footer.header8.header}
                  </h5>
                  <ul className="list-unstyled">
                    {footer.header8.sublink.map((link) => (
                      <li key={link.route} className="mb-2">
                        <Link
                          to={link.route}
                          onClick={(e) => {
                            if (link.route !== null)
                              handleNavClick(e, link.route);
                          }}
                          className="text-decoration-none colorBlack-500"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sixth col */}

              <div className="col-4 col-lg-2 px-2 mt-sm-5 mt-lg-0">
                <div className="vstack colorBlack-500">
                  {/* Forms */}
                  <h5
                    className="fontPrimary text-uppercase"
                    key={footer.header9.id}
                  >
                    {footer.header9.header}
                  </h5>
                  <ul className="list-unstyled">
                    {footer.header9.sublink.map((link) => (
                      <li key={link.route} className="mb-2">
                        <Link
                          to={link.route}
                          onClick={(e) => {
                            if (link.route !== null)
                              handleNavClick(e, link.route);
                          }}
                          className="text-decoration-none colorBlack-500"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* Follow us */}
                  <h5
                    className="fontPrimary text-uppercase"
                    key={footer.header10.id}
                  >
                    {footer.header10.header}
                  </h5>
                  <ul className="list-unstyled">
                    {footer.header10.sublink.map((link) => (
                      <li key={link.route} className="mb-2">
                        <Link
                          to={link.route}
                          onClick={(e) => {
                            if (link.route !== null)
                              handleNavClick(e, link.route);
                          }}
                          className="text-decoration-none colorBlack-500"
                        >
                          <span className="me-1">{link.icon}</span> {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
