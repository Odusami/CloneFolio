import "./Fonts.scss";
import ImageTextGroup from "./imageTextGroup/ImageTextGroup";

const Fonts = () => {
  return (
    <>
      <section>
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

        <ImageTextGroup />
      </section>
    </>
  );
};

export default Fonts;
