import GalleryCard from "../galleryCard/GalleryCard";
import "./DigitalDownloads.scss";
import { FaCalendarDays } from "react-icons/fa6";
import { IoMdCloudDownload } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";
import { IoChatbubbleEllipses } from "react-icons/io5";
const DigitalDownloads = () => {
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
              icon: <IoMdCloudDownload />,
              header: "Download Sizes",
              title:'Enable full resolution downloads or select from one of several lower resolution options.',
            },
            {
              icon: <IoMdDownload />,
              header: "Download Types",
              title:'You choose whether clients can download single images, the entire gallery, or both.',
            },
            {
              icon: <IoChatbubbleEllipses />,
              header: "Download Notification",
              title:'Receive in-app notifications to confirm your clients successful gallery downloads..',
            },
          ].map((content, index)=>(
            <div key={content.header + index} className="col px-md-5 py-5 mb-5 cardPadding">
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
    </>
  );
};

export default DigitalDownloads;
