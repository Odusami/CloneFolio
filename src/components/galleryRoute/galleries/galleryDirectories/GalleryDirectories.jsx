import './GalleryDirectories.scss';

const GalleryDirectories = () => {
  return (
    <>
        <section className="clientDownloadImgSection">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-sm-5 mb-5 mb-sm-0">
              <div className="vstack gap-3 pe-lg-5">
                <h2 className="mb-3">Gallery directory
                </h2>
                <h4>
                Give your clients an easy way to find all of your published galleries. Customize your directory by choosing from several themes and use the SEO settings to improve your Google rankings.
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
  )
}

export default GalleryDirectories