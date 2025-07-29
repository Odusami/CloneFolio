import "./GalleryDirectories.scss";
import { FaCropSimple, FaLink } from "react-icons/fa6";
import { RiFileSearchFill } from "react-icons/ri";
import GalleryCard from "../galleryCard/GalleryCard";

const GalleryDirectories = () => {
  return (
    <>
      <section className="clientDownloadImgSection">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-sm-5 mb-5 mb-sm-0">
              <div className="vstack gap-3 pe-lg-5">
                <h2 className="mb-3">Gallery directory</h2>
                <h4>
                  Give your clients an easy way to find all of your published
                  galleries. Customize your directory by choosing from several
                  themes and use the SEO settings to improve your Google
                  rankings.
                </h4>
                <div>
                  <button className="mainBtn py-2">GET STARTED</button>
                </div>
              </div>
            </div>

            {/* Picture col */}
            <div className="col-12 col-sm-7 ps-md-3 ps-lg-5">
              <img
                src="./folio images/gallery-directory2.jpg"
                className="clientDownloadImg"
                alt="Gallery Directory"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 justify-content-center">
          {[
            {
              icon: <FaCropSimple />,
              header: "Customization",
              title:
                "Customize your directory by uploading your logo and by choosing from one of several available themes.",
            },
            {
              icon: <RiFileSearchFill />,
              header: "SEO",
              title:
                "Fine tune the available SEO settings to help Google index your work and to drive more traffic to your galleries.",
            },
            {
              icon: <FaLink />,
              header: "Connect your domain",
              title:
                "Do you own a domain name for your studio? You can further personalize your directory by connecting directly to your domain.",
            },
          ].map((content, index) => (
            <div
              key={content.header + index}
              className="col px-md-5 py-5 mb-5 cardPadding"
            >
              <GalleryCard icon={content.icon} title={content.title}>
                {content.path ? (
                  <Link className="cardHeaderLink" to={content.path}>
                    {content.header}
                  </Link>
                ) : (
                  content.header
                )}
              </GalleryCard>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GalleryDirectories;
