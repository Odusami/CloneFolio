import "./GalleryStore.scss";
import GalleryCard from "../galleryCard/GalleryCard";
import { FaFileCircleCheck, FaTag } from "react-icons/fa6";
import { MdPlaylistAddCheckCircle, MdOutlineCloudDownload } from "react-icons/md";
import { FaBoxes, FaStripe, FaShippingFast } from "react-icons/fa";
import { TiDivide } from "react-icons/ti";


const GalleryStore = () => {
  return (
    <>
      <section className="clientDownloadImgSection">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-sm-5 mb-5 mb-sm-0">
              <div className="vstack gap-3 pe-lg-5">
                <h2 className="mb-3">Online Store
                </h2>
                <h4>
                Set up shop with your own online store. Easily sell prints, downloads and more in any gallery.
                </h4>
                <div>
                  <button className="mainBtn py-2">GET STARTED</button>
                </div>
              </div>
            </div>

            {/* Picture col */}
            <div className="col-12 col-sm-7 ps-md-3 ps-lg-5">
              <img
                src="/public/folio images/order-page.jpg"
                className="clientDownloadImg"
                alt="Store Download"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container">
      <div className="vstack align-items-center py-5 text-center">
          <h2 className="">How It Works</h2>
          <p className="line my-4"></p>
          <h4 className='w-75 storeTitle colorBlack-500 lh-base'> Selling with Lightfolio is easy. Use the sales setup wizard to painlessly enable your online store. Set your own prices, shipping, and sales taxes. Choose to fulfill your own orders or use one of our professional lab partners. Lastly, connect to Stripe or PayPal to process online payments. Now you're ready to go!</h4>
        </div>
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 justify-content-center">
          {[
            {
              icon: <FaFileCircleCheck />,
              header: "Price Lists",
              title:'Create custom price lists for every gallery. Control which products you want to sell and for how much markup. Add pictures and product description.',
            },
            {
              icon: <MdPlaylistAddCheckCircle />,
              header: "Self fulfillment",
              title:'Take control of your orders. You are responsible for order fulfillment and shipping. Sell any product you can produce.',
            },
            {
              icon: <FaBoxes />,
              header: "Lab fulfillment",
              title:'Let one of our lab partners handle your orders. Sell from their extensive catalog of products and have them ship to your clients.',
            },
            {
              icon: <MdOutlineCloudDownload />,
              header: "Prints, Downloads & More",
              title:'Sell traditional products like prints, canvases and more. Additionally, offer your clients the option to buy image downloads.',
            },
            {
              icon: <FaStripe />,
              header: "Stripe integration",
              title:'Process credit card transactions through Stripe or PayPal. Connect to your existing account (or create an account for free).',
            },
            {
              icon: <FaTag />,
              header: "Promo Codes",
              title:'Offer promo codes (gift cards, coupons) for use by your clients to help increase sales. Set minimum order requirements and other options.',
            },
            {
              icon: <FaShippingFast />,
              header: "Shipping",
              title:'Set the shipping options that are available to your clients. Configure different rates based on buyers shipping address.',
            },
            {
              icon: <TiDivide />,
              header: "Taxes",
              title:'If you are required to collect sales and other taxes, set up tax rates based on buyer shipping address.',
            },
            
          ].map((content, index)=>(
            <div key={content.header + index} className="col px-md-5 py-5 mb-5 cardPadding">
                <GalleryCard icon={content.icon} title={content.title}>
                  {content.path ? (
                    <Link className="cardHeaderLink" to={content.path}>{content.header}</Link>
                  ) : (
                    content.header
                  )}
                </GalleryCard>
                
            </div>
          ))}
          
        </div>
      </div>
    </>
  );
};

export default GalleryStore;
