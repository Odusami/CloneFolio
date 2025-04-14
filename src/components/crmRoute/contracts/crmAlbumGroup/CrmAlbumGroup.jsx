import './CrmAlbumGroup.scss';

const CrmAlbumGroup = ({content, index}) => {
  return (
    <>
              <div key={content.header + index} className="col mb-5 crmAlbumGrid">
                <div className="contractGrid">
                  <div>
                    <img
                      src={content.image}
                      alt={content.title}
                      className="img-fluid imgShadow rounded"
                    />
                    <h4 className="fw-semibold m-0 mb-1 mt-3">
                      {content.header}
                    </h4>
                    <p className="colorBlack-500">{content.title}</p>
                  </div>
                </div>
              </div>
    </>
  )
}

export default CrmAlbumGroup