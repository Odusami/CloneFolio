import './ImageTextGroup.scss';

const ImageTextGroup = ({image, text}) => {
  return (
    <>
      <div className='text-center'>
        <img src={image} className='img-fluid imgShadow' alt={text} />
        <h4 className='text-uppercase fw-medium mt-3'>{text}</h4>
      </div>
    </>
  )
}

export default ImageTextGroup