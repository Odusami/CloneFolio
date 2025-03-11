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
                src="/public/folio images/client-downloads.jpg"
                className="clientDownloadImg"
                alt="Client Download"
              />
            </div>
          </div>
        </div>
      </section>

      <div>
        <button className="mainBtn py-2">GET STARTED</button>
      </div>
    </>
  );
};

export default Lightroom;
