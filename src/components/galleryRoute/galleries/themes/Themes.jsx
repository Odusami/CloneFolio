import PhotoMockup from "./photoMockup/PhotoMockup";
import "./Themes.scss";

const Themes = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="vstack align-items-center text-center gap-4">
            <h2>Cover Themes</h2>
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
                laptop: "/public/folio images/themes-london.png",
                mobile: "/public/folio images/themes-london-mobile.png",
                text: "London",
              },
              {
                laptop: "/public/folio images/themes-auckland.png",
                mobile: "/public/folio images/themes-auckland-mobile.png",
                text: "Auckland",
              },
              {
                laptop: "/public/folio images/themes-berlin.png",
                mobile: "/public/folio images/themes-berlin-mobile.png",
                text: "Berlin",
              },
              {
                laptop: "/public/folio images/themes-monaco.png",
                mobile: "/public/folio images/themes-monaco-mobile.png",
                text: "Monaco",
              },
              {
                laptop: "/public/folio images/themes-milan.png",
                mobile: "/public/folio images/themes-milan-mobile.png",
                text: "Milan",
              },
              {
                laptop: "/public/folio images/themes-geneva.png",
                mobile: "/public/folio images/themes-geneva-mobile.png",
                text: "Geneva",
              },
              {
                laptop: "/public/folio images/themes-halifax.png",
                mobile: "/public/folio images/themes-halifax-mobile.png",
                text: "Halifax",
              },
              {
                laptop: "/public/folio images/themes-santafe.png",
                mobile: "/public/folio images/themes-santafe-mobile.png",
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
                laptop: "/public/folio images/styles-masonry.png",
                mobile: "/public/folio images/styles-masonry-mobile.png",
                text: "Mansory",
              },
              {
                laptop: "/public/folio images/styles-masonry-wide.png",
                mobile: "/public/folio images/styles-masonry-wide-mobile.png",
                text: "Mansory Wide",
              },
              {
                laptop: "/public/folio images/styles-justified.png",
                mobile: "/public/folio images/styles-justified-mobile.png",
                text: "Justified",
              },
              {
                laptop: "/public/folio images/styles-squares.png",
                mobile: "/public/folio images/styles-squares-mobile.png",
                text: "Squares",
              },
              {
                laptop: "/public/folio images/styles-fullblocks.png",
                mobile: "/public/folio images/styles-fullblocks-mobile.png",
                text: "Block",
              },
              {
                laptop: "/public/folio images/styles-slideshow.png",
                mobile: "/public/folio images/styles-slideshow-mobile.png",
                text: "Slideshow",
              },
              {
                laptop: "/public/folio images/styles-circles.png",
                mobile: "/public/folio images/styles-circles-mobile.png",
                text: "Circles",
              },
              {
                laptop: "/public/folio images/styles-pins.png",
                mobile: "/public/folio images/styles-pins-mobile.png",
                text: "Pins",
              },
              {
                laptop: "/public/folio images/styles-tiles.png",
                mobile: "/public/folio images/styles-tiles-mobile.png",
                text: "Tiles",
              },
            ].map((content, index)=>(
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
