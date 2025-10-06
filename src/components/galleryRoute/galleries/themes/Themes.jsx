import PhotoMockup from "./photoMockup/PhotoMockup";
import "./Themes.scss";

const Themes = () => {
  return (
    <>
      <section className="greySection">
        <div className="container">
          <div className="vstack align-items-center text-center gap-4">
            <h2 className="fw-medium">Cover Themes</h2>
            <h4 className="w-75 colorBlack-500 lh-base">
              You have full control of each of your client galleries, starting
              with the cover page. Choose a layout and then customize the text,
              fonts, colors, alignment, placement and more.
            </h4>
          </div>
        </div>
        {/* Cover Theme catalogue */}
        <div className="container">
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mt-5">
            {[
              {
                laptop: "folio images/themes-london.png",
                mobile: "folio images/themes-london-mobile.png",
                text: "London",
              },
              {
                laptop: "folio images/themes-auckland.png",
                mobile: "folio images/themes-auckland-mobile.png",
                text: "Auckland",
              },
              {
                laptop: "folio images/themes-berlin.png",
                mobile: "folio images/themes-berlin-mobile.png",
                text: "Berlin",
              },
              {
                laptop: "folio images/themes-monaco.png",
                mobile: "folio images/themes-monaco-mobile.png",
                text: "Monaco",
              },
              {
                laptop: "folio images/themes-milan.png",
                mobile: "folio images/themes-milan-mobile.png",
                text: "Milan",
              },
              {
                laptop: "folio images/themes-geneva.png",
                mobile: "folio images/themes-geneva-mobile.png",
                text: "Geneva",
              },
              {
                laptop: "folio images/themes-halifax.png",
                mobile: "folio images/themes-halifax-mobile.png",
                text: "Halifax",
              },
              {
                laptop: "folio images/themes-santafe.png",
                mobile: "folio images/themes-santafe-mobile.png",
                text: "Santa Fe",
              },
            ].map((content, index) => (
              <div key={`${content.laptop}+${index}`} className="col mb-5 px-4">
                <PhotoMockup
                  laptop={content.laptop}
                  mobile={content.mobile}
                  text={content.text}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Thumbnail */}
        <div className="container">
          <div className="vstack align-items-center py-5 text-center">
            <h2 className="">Thumbnail Styles</h2>
            <p className="line my-4"></p>
            <h4 className="w-75 storeTitle colorBlack-500 lh-base">
              {" "}
              Decide how to display image thumbnails. Choose the layout,
              background theme, menu location and set the margins between
              thumbnails.
            </h4>
          </div>
        </div>

        <div className="container">
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mt-5">
            {[
              {
                laptop: "folio images/styles-masonry.png",
                mobile: "folio images/styles-masonry-mobile.png",
                text: "Mansory",
              },
              {
                laptop: "folio images/styles-masonry-wide.png",
                mobile: "folio images/styles-masonry-wide-mobile.png",
                text: "Mansory Wide",
              },
              {
                laptop: "folio images/styles-justified.png",
                mobile: "folio images/styles-justified-mobile.png",
                text: "Justified",
              },
              {
                laptop: "folio images/styles-squares.png",
                mobile: "folio images/styles-squares-mobile.png",
                text: "Squares",
              },
              {
                laptop: "folio images/styles-fullblocks.png",
                mobile: "folio images/styles-fullblocks-mobile.png",
                text: "Block",
              },
              {
                laptop: "folio images/styles-slideshow.png",
                mobile: "folio images/styles-slideshow-mobile.png",
                text: "Slideshow",
              },
              {
                laptop: "folio images/styles-circles.png",
                mobile: "folio images/styles-circles-mobile.png",
                text: "Circles",
              },
              {
                laptop: "folio images/styles-pins.png",
                mobile: "folio images/styles-pins-mobile.png",
                text: "Pins",
              },
              {
                laptop: "folio images/styles-tiles.png",
                mobile: "folio images/styles-tiles-mobile.png",
                text: "Tiles",
              },
            ].map((content, index) => (
              <div key={`${content.laptop}+${index}`} className="col mb-5 px-4">
                <PhotoMockup
                  laptop={content.laptop}
                  mobile={content.mobile}
                  text={content.text}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Themes;
