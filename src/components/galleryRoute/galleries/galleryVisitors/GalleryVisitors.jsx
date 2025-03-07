import "./GalleryVisitors.scss";
import { FaMapMarkerAlt, FaMapMarkedAlt } from "react-icons/fa";
import { BsCalendar2CheckFill } from "react-icons/bs";
import GalleryCard from "../galleryCard/GalleryCard";
const GalleryVisitors = () => {
  return (
    <>
      <section className="clientDownloadImgSection">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-sm-5 mb-5 mb-sm-0">
              <div className="vstack gap-3 pe-lg-5">
                <h2 className="mb-3">Client Downloads</h2>
                <h4>
                  Conveniently allow your clients to download their pictures.
                  Restrict access and control file sizes at the click of a
                  button.
                </h4>
                <div>
                  <button className="mainBtn py-2">GET STARTED</button>
                </div>
              </div>
            </div>

            {/* Picture col */}
            <div className="col-12 col-sm-7 ps-md-3 ps-lg-5">
              <img
                src="/public/folio images/client-downloads.jpg"
                className="clientDownloadImg"
                alt="Client Download"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 justify-content-center">
          {[
            {
              icon: <FaMapMarkerAlt />,
              header: "Visitor Insight",
              title:
                "Want to know more about your gallery visitors? Easily keep track of client visits, their location and what devices they are using to view your galleries.",
            },
            {
              icon: <FaMapMarkedAlt />,
              header: "Maps",
              title:
                "By using geolocation technology, visitor maps give you a visual representation of the location of your gallery traffic.",
            },
            {
              icon: <BsCalendar2CheckFill />,
              header: "Daily/weekly updates",
              title:
                "Regular email notifications alert you to new visitors. A weekly summary email gives you statistics on visitor trends.",
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

export default GalleryVisitors;
