import GalleryCard from "../galleryRoute/galleries/galleryCard/GalleryCard";
import "./FileTypes.scss";

import { FaFileCirclePlus } from "react-icons/fa6";
import { BiSolidErrorAlt } from "react-icons/bi";


const FileTypes = () => {
  return (
    <>
      <section className="greySection">
        <div className="container">
          <div className="vstack align-items-center text-center gap-4 mb-5">
            <h2 className="fw-medium">Supported File Types</h2>
            <h4 className="w-75 colorBlack-500 lh-base">
              Lightfolio supports upload of the following image formats: jpg,
              gif, png and tiff. Need support for another file type? Reach out
              to us with your request.
            </h4>
          </div>

          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 justify-content-center pt-5">
            {[
              {
                icon: <FaFileCirclePlus />,
                header: "File Types",
                title:
                  "Currently supporting jpg, gif, png and tif.",
              },
              {
                icon: <BiSolidErrorAlt />,
                header: "Max file size",
                title:
                  "Upload any image up to 70MB in size.",
              },
            ].map((content, index)=>(
                <div key={`${content.header}+${index}`} className="col mb-5 ">
                    <GalleryCard header={content.header} icon={content.icon} title={content.title}/>
                </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FileTypes;
