import "./Fonts.scss";
import ImageTextGroup from "./imageTextGroup/ImageTextGroup";

const Fonts = () => {
  return (
    <>
      <section className="greySection">
        <div className="container">
          <div className="vstack align-items-center text-center gap-4">
            <h2 className="fw-medium">Fonts</h2>
            <h4 className="w-75 colorBlack-500 lh-base">
              Take your galleries to the next level by pairing your cover photos
              with the perfect, complimentary font. Choose from over 30 fonts
              faces, including various modern serif, sans-serif and handwritten
              script options. For even more advanced customization, select your
              preferred font size, color, weight, spacing, drop shadows and
              more.
            </h4>
          </div>
        </div>

        {/* Font sytle display */}
        <div className="container">
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mt-5">
            {[
              {
                image: "./folio images/fonts-merriweather.jpg",
                text: "Marriweather",
              },
              {
                image: "./folio images/fonts-raleway.jpg",
                text: "Raleway",
              },
              {
                image: "./folio images/fonts-so-lovely.jpg",
                text: "So Lovely",
              },
              {
                image: "./folio images/fonts-fashionista-black.jpg",
                text: "Fashionista Black",
              },
              {
                image: "./folio images/fonts-amatic-sc.jpg",
                text: "Amatic Sc",
              },
              {
                image: "./folio images/fonts-droid-serif.jpg",
                text: "Droid Serif",
              },
            ].map((content, index) => (
              <div key={`${content.text}+${index}`} className="col mb-5 px-4">
                <ImageTextGroup image={content.image} text={content.text} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Fonts;
