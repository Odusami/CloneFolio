import "./GridTextGroup.scss";

const GridTextGroup = ({headerColor, btnColor, subHeader, header, title, btnText, center}) => {
    const align = center === 'center'
    ? 'text-center'
    : '';

    const headerStyle = headerColor === 'grey' 
    ? 'colorBlack-600 textLabel text-uppercase'
    : 'colorTertiary textLabel';

    const btnStyle = btnColor === 'grey'
    ? 'textBtn'
    : 'mainBtn'

  return (
    <>
      <div className={align}>
        <h6 className={headerStyle}>{subHeader}</h6>
        <h2 className="mb-4 mt-2">{header}</h2>
        <h4 className="lh-base mb-4 pt-1">
        {title}
        </h4>
        <button className={btnStyle}>{btnText}</button>
      </div>
    </>
  );
};

export default GridTextGroup;
