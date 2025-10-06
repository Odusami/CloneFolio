import "./Lightroom.scss";

const Lightroom = () => {
  return (
    <>
      <section className="clientDownloadImgSection">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-sm-5 mb-5 mb-sm-0">
              <div className="vstack gap-3 pe-lg-5">
                <h2 className="mb-3">Adobe Lightroom Plug-in</h2>
                <h4>
                  Easily upload and synchronize your images from Lightroom to
                  your Lightfolio account.
                </h4>
              </div>
            </div>

            {/* Picture col */}
            <div className="col-12 col-sm-7 ps-md-3 ps-lg-5">
              <img
                src="folio images/lr-computer.jpg"
                className="clientDownloadImg"
                alt="Lightroom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Text group */}
      <div className="container pb-5 pt-5 pt-lg-0">
        <div className="vstack align-items-center text-center gap-4 pb-5">
          <h2 className="fw-medium">Plug-in Download</h2>
          <h4 className="w-75 colorBlack-500 lh-base">
            Click the button below to download the official Lightfolio Lightroom
            plug-in. Our plug-in allows you to directly upload images from
            Lightroom Classic to your Lightfolio account in the cloud.
          </h4>
          <div>
            <button className="mainBtn py-2">GET STARTED</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lightroom;
