import { Link } from "react-router-dom";
import "./Galleries.scss";
import GalleryCard from "./galleryCard/GalleryCard";
import { FaCalendarDays } from "react-icons/fa6";
import { div } from "framer-motion/client";

const Galleries = () => {
  return (
    <>
      <div className="galleryBg">
        <div className="container">
          <div className="text-center vstack align-items-center gap-4">
            <h2>Client Galleries - Feature List</h2>
            <h4 className="w-75 colorBlack-500">
              Lightfolio is a fully featured,{" "}
              <Link to={"/"} className="colorBlack-100">
                online photo gallery
              </Link>{" "}
              online photo gallery platform that provides multiple configuration
              options and allows for advanced customization.
            </h4>
            <img
              src="/public/folio images/devices-models.png"
              className="w-50 mt-3"
              alt="Laptop Gallery"
            />
          </div>
        </div>

        <div className="container">
          <div className="row row-cols-3">
            {[
              {
                icon: <FaCalendarDays />,
                header: "PROOFING",
                title:
                  "Share and collaborate with clients in selecting photos. Enable downloads, watermarks and solicit feedback through comments.",
                path: "/gallery/proofing",
              },
              {
                icon: <FaCalendarDays />,
                header: "Watermarks",
                title:
                  "Protect your work with text or image watermarks. Control placement and opacity.",
              },
              {
                icon: <FaCalendarDays />,
                header: "Visitor Analytics",
                title:
                  "Not only can you track how many visitors you have, but you can also monitor geolocation, web browser and device type.",
                path: "/gallery/visitor-analytics",
              },
              {
                icon: <FaCalendarDays />,
                header: "Responsive Design",
                title:
                  "Over 50% of web traffic today is on mobile devices. Our galleries are designed to look great on desktop computer, tablet or phone.",
              },
              {
                icon: <FaCalendarDays />,
                header: "Favorites",
                title:
                  "Allow your clients to create and save collections of their favorite images. You can easily view their selections and then export filenames for use in Lightroom.",
              },
              {
                icon: <FaCalendarDays />,
                header: "Online Sales",
                title:
                  "Configure your galleries so you can sell prints, albums, digital downloads and more. Zero commissions.",
                path: "/gallery/online-store",
              },
              {
                icon: <FaCalendarDays />,
                header: "Gallery Directories",
                title:
                  "Create a custom portal so your users can see a list of your publicly shared galleries.",
                path: "/gallery/directories",
              },
              {
                icon: <FaCalendarDays />,
                header: "Social Media Sharing",
                title:
                  "Enable this option to allow gallery visitors to easily share through Facebook, Twitter and email",
              },
              {
                icon: <FaCalendarDays />,
                header: "Downloads",
                title:
                  "Enable downloading for the entire gallery or just for individual images. You set the download file resolution.",
                path: "/gallery/client-download",
              },
              {
                icon: <FaCalendarDays />,
                header: "Password Protection",
                title:
                  "Each individual gallery can be set to require a password to view and/or download images.",
              },
              {
                icon: <FaCalendarDays />,
                header: "Cover Themes",
                title:
                  "Every gallery has a cover page. Choose from 7 templates and customize images, text, font face, alignment and more.",
                path: "/gallery/cover-theme",
              },
              {
                icon: <FaCalendarDays />,
                header: "Thumbnail Styles",
                title:
                  "Further customize your gallery by choosing a thumbnail style. Set the margin between images and select the menu orientation.",
                path: "/gallery/cover-theme/thumbnail-style",
              },
              {
                icon: <FaCalendarDays />,
                header: "Supported File Types",
                title:
                  "Lightfolio supports jpg, gif, png and tif. Max file size is 70MB. (Support for max file sizes up to 1GB+ is available upon request)",
                path: "/supported-file-types",
              },
              {
                icon: <FaCalendarDays />,
                header: "Custom Domains",
                title:
                  "You can use your own domain, www.mycompany.com, to transparently connect to Lightfolio galleries.",
              },
              {
                icon: <FaCalendarDays />,
                header: "Color Schemes",
                title: "Choose between a light and dark color scheme.",
              },
              {
                icon: <FaCalendarDays />,
                header: "Email Invitations",
                title:
                  "Create and send customized HTML emails, inviting your clients to view their galleries.",
              },
              {
                icon: <FaCalendarDays />,
                header: "Fonts",
                title:
                  "Typography is important. Choose from over 20 font options when customizing your gallery cover.",
                path: "/fonts",
              },
              {
                icon: <FaCalendarDays />,
                header: "Pro Lab Partners",
                title:
                  "Offer professional prints, canvas wraps and more with our lab partners: Bay Photo Lab and Loxley Colour.",
                path: "/gallery/lab-partners",
              },
              {
                icon: <FaCalendarDays />,
                header: "Lightroom",
                title:
                  "Easily upload and sync your galleries by using our Lightroom plug-in.",
                path: "/lightroom",
              },
            ].map((content, index) => (
              <div key={content.header + index} className="col px-md-5 py-5 mb-5">
                <GalleryCard icon={content.icon} title={content.title}>
                  {content.path ? (
                    <Link className="cardHeaderLink" to={content.path}>{content.header}</Link>
                  ) : (
                    content.header
                  )}
                </GalleryCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Galleries;
