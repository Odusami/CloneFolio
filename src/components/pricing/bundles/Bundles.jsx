import './Bundles.scss';

const bundles = {
  id: "bundles",
  title: "Access to every feature at the best rates.",
  icon: <GoCheckCircleFill className="pricingIcon" />,
  gallery1: {
    header: "Starter",
    amount: "$0",
    amountType: "/mo",
    paymentType: "no charge",

    content: [
      {
        id: " GalleryContent1",
        size: "1 GB",
        title: "Storage",
        subTitle: "(About 200 Images)",
      },
      {
        id: " GalleryContent1",
        title: "15% Commission",
      },
      {
        id: " GalleryContent1",
        title: "Proofing",
      },
      {
        id: " GalleryContent1",
        title: "Online Sales",
      },
      {
        id: " GalleryContent1",
        title: "Use Your Logo",
      },
    ],
  },
}
const Bundles = () => {
  return (
    <>

    </>
  )
}

export default Bundles