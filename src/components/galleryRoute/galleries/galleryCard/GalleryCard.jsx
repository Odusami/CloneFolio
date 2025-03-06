import "./GalleryCard.scss";
const GalleryCard = ({icon, children, title}) => {
  return (
    <>
      <div className="vstack text-center justify-content-center align-items-center gap-2">
       <div className="galleryCardIcon">{icon}</div> 
        <h6 className="colorBlack-400 fw-medium text-uppercase mt-2">{children}</h6>
        <h6>
          {title}
        </h6>
      </div>
    </>
  );
};

export default GalleryCard;
