import { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import { GrBlog } from "react-icons/gr";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
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
      { title: "Feature List", route: "/feature-list" },
      { title: "Proofing", route: "/proofing" },
      { title: "Client Downloads", route: "/client-download" },
      { title: "Themes", route: "/theme" },
      { title: "Online Store", route: "/online-store" },
      { title: "Visitor Analytics", route: "/visitor-analytic" },
      { title: "Gallery Directories", route: "/gallery-directory" },
    ],
  },
  header2: {
    header: "Pricing",
    id: "header2",
  },
  header3: {
    header: "Websites",
    id: "header3",
  },
  header4: {
    header: "Studio Manager",
    id: "header4",

    sublink: [
      { title: "Photography Crm", route: "/photography-crm" },
      { title: "Invoices", route: "/invoice" },
      { title: "Booking Site", route: "/booking-site" },
    ],
  },
  header5: {
    header: "Contracts",
    id: "header5",

    sublink: [
      { title: "Contracts", route: "/contract" },
      { title: "Wedding Contract", route: "/wedding-contract" },
      { title: "Portrait Contract", route: "/portrait-contract" },
      { title: "Boudior Contract", route: "/boudior-contract" },
      { title: "Engagement Shoot", route: "/engagement-shoot" },
      { title: "Print Release", route: "/print-release" },
      { title: "Event Contract", route: "/event-contract" },
      { title: "Commercial Contract", route: "/commercial-contract" },
      { title: "Real Estate Contract", route: "/real-estate-contract" },
      { title: "Second Shooter", route: "/second-shooter" },
      { title: "Photo Booth Contract", route: "/photo-booth-contract" },
    ],
  },
  header6: {
    header: "Forms",
    id: "header6",

    sublink: [
      { title: "Forms", route: "/form" },
      { title: "Photograpy Client", route: "/photography-client" },
      { title: "Questionaire", route: "/questionaire" },
      { title: "Wedding Day", route: "/wedding-day" },
      { title: "Boudoir Questionaire", route: "/boudoir-questionaire" },
      { title: "Family Portrait", route: "/family-portrait" },
      { title: "Senior Portrait", route: "/senior-portrait" },
      { title: "Photo Booking Form", route: "/photo-booking-form" },
      { title: "Contact Form", route: "/contact-form" },
      { title: "Photo Booth Rantal", route: "/photo-booth-rental" },
      { title: "Photo Order Form", route: "/photo-order-form" },
    ],
  },
  header7: {
    header: "Releases",
    id: "header7",

    sublink: [
      { title: "Model Release", route: "/model-release" },
      { title: "Minor Model Release", route: "/minor-model-release" },
      { title: "Boudior Release", route: "/boudior-release" },
      { title: "Social Media Release", route: "/social-media-release" },
      { title: "Video Release", route: "/video-release" },
      { title: "Copyright Release", route: "/copyright-release" },
      { title: "Daycare Release", route: "/daycare-release" },
      { title: "Employee Release", route: "/employee-release" },
    ],
  },
  header8: {
    header: "Mini Sessions",
    id: "header8",

    sublink: [
      { title: "Mini Sessions", route: "mini-session" },
      { title: "Christmas Minis", route: "/christmas-mini" },
      { title: "Fall Minis", route: "/fall-mini" },
      { title: "Boudior Minis", route: "/boudior-mini" },
    ],
  },
  header9: {
    header: "Support",
    id: "header9",

    sublink: [
      { title: "Knowledge Base", route: "knowledge-base" },
      { title: "Privacy Policy", route: "privacy-policy" },
      { title: "Terms of Use", route: "terms-of-use" },
      { title: "hello@clonefolio.com", route: "clonefolio-mail" },
    ],
  },
  header10: {
    header: "Follow Us",
    id: "header10",

    sublink: [
      { title: "Blog", icon: <GrBlog />, route: "knowledge-base" },
      {
        title: "Facebook",
        icon: <IoLogoFacebook />,
        route: "knowledge-base",
      },
      {
        title: "Instagram",
        icon: <FaInstagram />,
        route: "knowledge-base",
      },
      { title: "Twitter", icon: <FaTwitter />, route: "knowledge-base" },
    ],
  },
};

const Footer = () => {
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
                <img
                  src="/public/folio images/logo (1).png"
                  className="img-fluid w-50"
                  alt="Logo"
                />
                <p>A software platform for photographers.</p>
                <p><span className="styleC">c</span> Lightfolio {currentYear}</p>
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
                  {footer.header2.header}
                </h5>

                {/* Website */}
                <h5
                  className="fontPrimary mt-4 text-uppercase"
                  key={footer.header3.id}
                >
                  {footer.header3.header}
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
