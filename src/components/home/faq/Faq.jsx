import { div } from "framer-motion/client";
import "./Faq.scss";

const faq = {
  id: "parentFaq",
  content: [
    {
      id: "faq1",
      header: "Why choose Lightfolio client galleries?",
      title:
        "Our online galleries are built for professional photographers. You have a host of custom design options so you can create galleries that match your brand. Enable downloads, favorites, online sales and several other options for each gallery.",
    },
    {
      id: "faq2",
      header: "Can I upload my galleries for free?",
      title:
        "Yes. Our base plan allows free online photo galleries, where you can upload up to a gigabyte of images. You will have access to most every feature found on paid tiers. Upgrade only when you need more storage.",
    },
    {
      id: "faq3",
      header: "Can I control who sees my gallery?",
      title:
        "Photgraphers can limit access to their online galleries with a PIN or by requiring email + password authentication. The are optional settings you can enable.",
    },
    {
      id: "faq4",
      header: "What options do I have with downloads?",
      title:
        "Each of your photo galleries can restrict download types (single image vs entire gallery) and download sizes. Download delivery is also tracked so you can confirm which clients received their images.",
    },
    {
      id: "faq5",
      header: "What are favorites?",
      title:
        "Favorites give your clients the ability to select, collaborate and comment on their favorite images in your photo gallery. Its a convenient proofing system.",
    },
    {
      id: "faq6",
      header: "Can I use my own domain?",
      title:
        "All paid plans allow you to use your own domain to display the contents of your online galleries. Free plans allow you to choose a custom Lightfolio domain (mycompany.lightfolio.com).",
    },
    {
      id: "faq7",
      header: "Will my galleries load fast from different locations?",
      title:
        "Performance is important. All photo gallery content is delivered by a global content delivery network (CDN) to ensure your images load fast.",
    },
    {
      id: "faq8",
      header: "Do you charge a commission?",
      title:
        "For free plans, there is a commission when selling through your online store. However, all paid plans have 0% commission. This is a great way to try out sales on the free tier and if you start selling regularly, upgrade as needed.",
    },
    {
      id: "faq9",
      header: "Can I upload videos to my gallery?",
      title:
        "Video uploads are no possible in your online gallery. This feature is currently in beta--simply request access to start uploading your own videos directly to Lightfolio.",
    },
    {
      id: "faq10",
      header: "Can I protect my images with a watermark?",
      title:
        "Yes. Copyright protection is important to photographers and so watermarks are an option you can enable. Create text or image based watermarks and apply them on any gallery.",
    },
    {
      id: "faq11",
      header: "Do you have a Lightroom integration?",
      title:
        "Use our free Lightroom plugin to upload and sync photos in your galleries.",
    },
    {
      id: "faq12",
      header: "Do you support multiple languages?",
      title:
        "We serve photographers all across the world and now offer support for over a dozen languages. Display your online galleries using your clients native language.",
    },
    {
      id: "faq13",
      header: "How will my galleries display on a mobile device?",
      title:
        "Lightfolio photo galleries are built to display on any device. Clients can view your photo galleries on desktop, laptop, tablet or mobile device.",
    },
    {
      id: "faq14",
      header: "Can I promote my own brand?",
      title:
        "Every photographer can promote their brand by using your own studio logo and favicon on all galleries.",
    },
    {
      id: "faq15",
      header: "How do I share my gallery with clients?",
      title:
        "Sharing client galleries is easy. Add a custom message and login & download details your gallery invitations. Keep track of who has visited each gallery to sure your clients received the invite.",
    },
    {
      id: "faq16",
      header: "Do you support any integrations with Lightfolio galleries?",
      title:
        "Our other products (Studio Manager, Websites) both integrate with Lightfolio Client Galleries. Using one platform to manage your entire photography business makes life much, much easier.",
    },
    {
      id: "faq17",
      header: "Have more questions?",
      title: "Please reach out with other question at hello@clonefolio.com",
    },
  ],
};
 console.log(`#${faq.id}`);
 
const Faq = () => {
  return (
    <>
      <div className="accordion" id={faq.id}>
        {faq.content.map((content) => (
          <div key={content.id} className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${content.id} `}
                aria-expanded="true"
                aria-controls={content.id}
              >
                {content.header}
              </button>
            </h2>
            <div
              id={content.id}
              className="accordion-collapse collapse"
              data-bs-parent={`#${faq.id}`}
            >
              <h5 className="accordion-body colorBlack">{content.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Faq;
