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
                laptop: "folioImages/themes-london.png",
                mobile: "folioImages/themes-london-mobile.png",
                text: "London",
              },
              {
                laptop: "folioImages/themes-auckland.png",
                mobile: "folioImages/themes-auckland-mobile.png",
                text: "Auckland",
              },
              {
                laptop: "folioImages/themes-berlin.png",
                mobile: "folioImages/themes-berlin-mobile.png",
                text: "Berlin",
              },
              {
                laptop: "folioImages/themes-monaco.png",
                mobile: "folioImages/themes-monaco-mobile.png",
                text: "Monaco",
              },
              {
                laptop: "folioImages/themes-milan.png",
                mobile: "folioImages/themes-milan-mobile.png",
                text: "Milan",
              },
              {
                laptop: "folioImages/themes-geneva.png",
                mobile: "folioImages/themes-geneva-mobile.png",
                text: "Geneva",
              },
              {
                laptop: "folioImages/themes-halifax.png",
                mobile: "folioImages/themes-halifax-mobile.png",
                text: "Halifax",
              },
              {
                laptop: "folioImages/themes-santafe.png",
                mobile: "folioImages/themes-santafe-mobile.png",
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
                laptop: "folioImages/styles-masonry.png",
                mobile: "folioImages/styles-masonry-mobile.png",
                text: "Mansory",
              },
              {
                laptop: "folioImages/styles-masonry-wide.png",
                mobile: "folioImages/styles-masonry-wide-mobile.png",
                text: "Mansory Wide",
              },
              {
                laptop: "folioImages/styles-justified.png",
                mobile: "folioImages/styles-justified-mobile.png",
                text: "Justified",
              },
              {
                laptop: "folioImages/styles-squares.png",
                mobile: "folioImages/styles-squares-mobile.png",
                text: "Squares",
              },
              {
                laptop: "folioImages/styles-fullblocks.png",
                mobile: "folioImages/styles-fullblocks-mobile.png",
                text: "Block",
              },
              {
                laptop: "folioImages/styles-slideshow.png",
                mobile: "folioImages/styles-slideshow-mobile.png",
                text: "Slideshow",
              },
              {
                laptop: "folioImages/styles-circles.png",
                mobile: "folioImages/styles-circles-mobile.png",
                text: "Circles",
              },
              {
                laptop: "folioImages/styles-pins.png",
                mobile: "folioImages/styles-pins-mobile.png",
                text: "Pins",
              },
              {
                laptop: "folioImages/styles-tiles.png",
                mobile: "folioImages/styles-tiles-mobile.png",
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
