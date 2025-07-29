import GridTextGroup from "../../gridTextGroup/GridTextGroup";
import "./Forms.scss";
import { Link } from "react-router-dom";
import { LiaToolsSolid, LiaTelegramPlane } from "react-icons/lia";
import { HiOutlineUserGroup } from "react-icons/hi2";
import CrmAlbumGroup from "../contracts/crmAlbumGroup/CrmAlbumGroup";
import { HiOutlineChat } from "react-icons/hi";
import { BsPhone } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
const Forms = () => {
  return (
    <>
      <section className="formsFirstSection">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 justify-content-center align-items-center gap-4 gap-sm-0">
            <div className="col order-last order-sm-first">
              <GridTextGroup
                subHeader={"Lightfolio Studio Manager"}
                header={"Photography Forms"}
                title={
                  "Form and questionnaire templates for professional photographers."
                }
                btnText={"Get Started"}
              />
            </div>

            {/* Picture */}
            <div className="col order-first order-sm-last">
              <div className="imgPosition">
                <div className="hstack imgGroup">
                  <img
                    src="./folio images/form-1.jpg"
                    className="img-fluid"
                    alt="Invoice"
                  />
                  <img
                    src="./folio images/form-2.jpg"
                    className="img-fluid"
                    alt="Bride"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="formsSecondSection ">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 px-lg-5 gap-4 gap-sm-0">
            {[
              {
                icon: <LiaToolsSolid />,
                subHeader: "Easy to build",
                title:
                  "Use our intuitive form builder to create the custom forms you need. And our free templates are the perfect starting point to get you up and running. Add your logo and customize colors and layout.",
              },
              {
                icon: <LiaTelegramPlane />,
                subHeader: "Send or share online",
                title:
                  "Getting the form in the hands of your clients is easy. Post a link on your social media profile, embed the form directly on your website or send an email with a unique, trackable link.",
              },
              {
                icon: <HiOutlineUserGroup />,
                subHeader: "Convenient for clients",
                title:
                  "Getting information from your clients doesn't have to be hard. Lightfolio forms make data collection easy and convenient for both you and your clients. Say goodbye to paper forms.",
              },
            ].map((content, index) => (
              <div
                key={content.subHeader + index}
                className="col px-3 mb-sm-3 mb-md-0"
              >
                <div className="hstack textGroup align-items-start">
                  <div className="d-inline-block me-3">
                    <p>{content.icon}</p>
                  </div>
                  <h5>
                    <span>{content.subHeader}</span>
                    {content.title}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="formsThirdSection">
        <div className="container">
          <div className="vstack text-center gap-4 px-lg-5 mb-5">
            <h2>20+ Photographer Form Templates</h2>
            <h4>
              A dozen free photography form templates are at your disposal. Use
              them as a starting point to craft the perfect forms--ones best
              suited for you and your clients. Click any thumbnail below to see
              a live preview.
            </h4>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gap-3 justify-content-center">
            {[
              {
                image: "./folio images/form1.jpg",
                header: "Basic Contact Form Template",
                title:
                  "For a general purpose contact form, use this template to capture leads for your business. Solicit the bare minimum of information to increase form conversion rates.",
              },
              {
                image: "./folio images/form2.jpg",
                header: "Model Release Form Template",
                title:
                  "Free model release form for use with your photo clients. Remove any clauses you don't need, update the cover page and send out for signing online.",
              },
              {
                image: "./folio images/form3.jpg",
                header: "Wedding Day Questionnaire Template",
                title:
                  "Have the bride or groom share a timeline and other details of their wedding day by completing this thorough questionnaire. Confirm venue information, contact numbers, important names and more...",
              },
              {
                image: "./folio images/form4.jpg",
                header: "Boudoir Pre-shoot Questionnaire",
                title:
                  "Every boudoir session is a very personal experience. Sending your client an online questionnaire in advance of the shoot will help you understand the clients expectations, preferences and boundaries..",
              },
              {
                image: "./folio images/form5.jpg",
                header: "Engagement Session Questionnaire",
                title:
                  "Engagement sessions are meant to be fun. By using this form to ask questions of your client, you'll be able to get a better idea of just how adventurous they are. How any outfit changes, how many loca",
              },
              {
                image: "./folio images/form6.jpg",
                header: "Photo Order Form Template",
                title:
                  "Need a bare bones method to complete a client order? Use this order form to get client contact and order details. Turn on checkout option to collect payment online.",
              },
              {
                image: "./folio images/form7.jpg",
                header: "Senior Portraits Questionnaire Tem..",
                title:
                  "This form template for your senior portrait session is a great start to a fun shoot. Asking questions and planting ideas about wardrobe, locations and themes will help you execute the perfect photo sh",
              },
              {
                image: "./folio images/form8.jpg",
                header: "Video Release Form Template",
                title:
                  "This video release can be used to obtain consent from clients that are the subject of any video shoot.",
              },
              {
                image: "./folio images/form9.jpg",
                header: "Newborn Session Questionnaire Template",
                title:
                  "This video release can be used to obtain consent from clients that are the subject of any video shoot.",
              },
              {
                image: "./folio images/form10.jpg",
                header: "Copyright Release Form Template",
                title:
                  "This form can be used to secure copyright permission from the subject/model of any photo shoot.",
              },
              {
                image: "./folio images/form11.jpg",
                header: "Family Portrait Session Questionnaire",
                title:
                  "You'll want to go into any family portrait session knowing as much about your client and their family as possible. Use this online form to ask questions about family size, preferred locations and more",
              },
              {
                image: "./folio images/form12.jpg",
                header: "Boudoir Model Release Form Template",
                title:
                  "Be sure to obtain a photo release from your boudoir sessions and ensure you secure rights to use your work for marketing, etc.",
              },
              {
                image: "./folio images/form13.jpg",
                header: "Church Photo Release Form Template",
                title:
                  "Be sure to obtain a photo release from your boudoir sessions and ensure you secure rights to use your work for marketing, etc.",
              },
              {
                image: "./folio images/form14.jpg",
                header: "Daycare Photo Release Form Template",
                title:
                  "Use this form to obtain a photo release when from children and parents when photographing at a daycare.",
              },
              {
                image: "./folio images/form15.jpg",
                header: "Employee Photo Release Form Template",
                title:
                  "Use this form to obtain a photo release from employees when photographing at a place of business.",
              },
              {
                image: "./folio images/form16.jpg",
                header: "Maternity Session Questionnaire Template",
                title:
                  "Any maternity photo shoot can run the gamut in terms of what's expected. Use this questionnaire to learn whether your client wants to incorporate their partner/spouse, what locations they have in mind",
              },
              {
                image: "./folio images/form17.jpg",
                header: "Minor Model Release Form Template",
                title:
                  "Use this photo release to obtain consent from the parent or guardian of a minor model.",
              },
              {
                image: "./folio images/form18.jpg",
                header: "Patient Photo Release Form Template",
                title:
                  "Use this form to obtain a photo release from patients when photographing at a medical facility.",
              },
              {
                image: "./folio images/form19.jpg",
                header: "Pet Photo Release Form Template",
                title:
                  "Use this form to obtain a photo release from the owner of a pet(s) during a pet photo shoot.",
              },
              {
                image: "./folio images/form20.jpg",
                header: "Photo Booth Rental Form Template",
                title:
                  "Make it easy for clients to rent your photo booth. Give them options to pick the perfect package as well as add-on options. Online payment is also available.",
              },
              {
                image: "./folio images/form21.jpg",
                header: "Photography Booking Form Template",
                title:
                  "This more lengthy contact form has an extended set of questions that you can use to learn more about your (potential) clients. This form requests the clients preference for shoot dates and times.",
              },
              {
                image: "./folio images/form22.jpg",
                header: "Photography Client Questionnaire Template",
                title:
                  "Reach out to your client in advance of a shoot by using this form to collect information that will help you better understand their needs and expectations...",
              },
              {
                image: "./folio images/form23.jpg",
                header: "Social Media Photo Release Form",
                title:
                  "This photo release can be used to obtain consent from clients to publish images of their likeness on any social media platform.",
              },
            ].map((content, index) => (
              <CrmAlbumGroup content={content} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="formsForthSection paddingS">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 gap-4 gap-md-0">
            <div className="col order-last order-md-first">
              <GridTextGroup
                subHeader={"Versatile"}
                headerColor={"grey"}
                header={"Use our online forms anywhere"}
                title={
                  "You've built your custom form/questionniare and now it's time to get it into the hands of your clients. Embed a Lightfolio form inside your website or send an email invitation directly to your client. And there's always the option of sharing the link to your form on social media."
                }
                btnText={"Get Started"}
              />
            </div>
            {/* col image */}
            <div className="col order-first order-md-last">
              <img
                src="./folio images/woman-with-tablet-3.jpg"
                className="img-fluid rounded w-75"
                alt="Tablet"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="formsFifthSection py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 gap-4 gap-md-0">
            {/* col image */}
            <div className="col">
              <img
                src="./folio images/coffee-couple.jpg"
                className="img-fluid rounded w-75"
                alt="Drinking Couple"
              />
            </div>

            {/*Col Text */}
            <div className="col">
              <GridTextGroup
                subHeader={"Contact Forms"}
                headerColor={"grey"}
                header={"Make it easy for prospective clients to get in touch"}
                title={
                  "New clients want to learn about your services and availability. Create the perfect, customized online form so you can gather their contact information and learn more about which services they are seeking."
                }
                btnText={"Get Started"}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="formsSixthSection paddingS">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 gap-4 gap-md-0">
            <div className="col order-last order-md-first">
              <GridTextGroup
                subHeader={"Payment"}
                headerColor={"grey"}
                header={"Collect Payment Online"}
                title={
                  "Use our online forms to collect a payment (credit cards, PayPal and more) as part of a form submission. Great for creating a simple, all-in-one checkout experience for your clients. Think online order forms, etc. Coming soon!"
                }
                btnText={"Get Started"}
              />
            </div>
            {/* col image */}
            <div className="col order-first order-md-last">
              <img
                src="./folio images/form-online-payment.jpg"
                className="img-fluid rounded w-75"
                alt="Card"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="formsSeventhSection py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 gap-4 gap-md-0">
            {/* col image */}
            <div className="col">
              <img
                src="./folio images/forms-save-for-later.jpg"
                className="img-fluid rounded w-75"
                alt="Professional"
              />
            </div>

            {/*Col Text */}
            <div className="col">
              <GridTextGroup
                subHeader={"Save For Later"}
                headerColor={"grey"}
                header={"Save your form and complete it later"}
                title={
                  "Have a long form with many questions? Your clients are busy and sometimes they won't have the time to complete a lengthy form in one sitting. Give them the option to save their work and resume completing it at a more convenient time--and on any device."
                }
                btnText={"Get Started"}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="formsEighthSection">
        <div className="container">
          <h3 className="text-center fs-4 colorBlack my-5 fw-medium">
            Lightfolio Studio Manager helps you:
          </h3>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-center gap-md-2 gap-lg-5">
            <div className="col">
              <div className="hstack align-items-start">
                <div className="d-inline-block me-3">
                  <h4 className="numBg">
                    <HiOutlineChat />
                  </h4>
                </div>
                <h5 className="colorBlack font1">
                  <span className="fw-bold me-1">Instant Notifications</span>
                  Once a form is submitted, receive real-time notifications,
                  letting you know the form is completed. An especially valuable
                  feature when using our contact forms.
                </h5>
              </div>
            </div>
            {/*  */}
            <div className="col">
              <div className="hstack align-items-start">
                <div className="d-inline-block me-3">
                  <h4 className="numBg">
                    <BsPhone />
                  </h4>
                </div>
                <h5 className="colorBlack font1">
                  <span className="fw-bold me-1">Responsive</span>
                  Our forms can be embedded in your{" "}
                  <Link to={"/website"} className="linkH">
                    website{" "}
                  </Link>{" "}
                  or available as a stand alone form. Our forms are designed to
                  look good on any platform--desktop computer, laptop, tablet or
                  mobile device.
                </h5>
              </div>
            </div>
            {/*  */}
            <div className="col">
              <div className="hstack align-items-start">
                <div className="d-inline-block me-3">
                  <h4 className="numBg">
                    <AiOutlineStar />
                  </h4>
                </div>
                <h5 className="colorBlack font1">
                  <span className="fw-bold me-1">All-in-one</span>
                  Integrate with Lightfolio{" "}
                  <Link to={"/crm/contract"} className="linkH">
                    contracts
                  </Link>
                  ,{" "}
                  <Link to={"/crm/invioce"} className="linkH">
                    invoices
                  </Link>{" "}
                  and{" "}
                  <Link to={"/crm/booking"} className="linkH">
                    booking
                  </Link>
                  . Client can now sign a contract, fill out a form and pay an
                  invoice, all at once. Keep things simple.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Forms;
