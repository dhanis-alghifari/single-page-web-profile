import ContactItem from "./ContactItem";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function ContactSection() {
  return (
    <section className="py-28 bg-primarygray flex rounded-lg flex-wrap" id="contact">
      <div className="container mx-auto px-10 2xl:px-0">
        <SectionTitle>Contact</SectionTitle>
        <SectionParagraph>Just Contact Me In Here.</SectionParagraph>
        <div className="md:w1/12 w-full ">
          <div className=" lg:py-16 lg:px-20 md:p-14 p-10">
            <div class="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-8">
              <ContactItem
                label="Email"
                value="dhanisalghifari@gmail.com"
                icon="/mail.svg"
                className="mt-6"
              />

              <ContactItem
                label="Phone"
                value="+6283812557911"
                icon="/phone.svg"
                className="mt-6"
              />

              <ContactItem
                label="Github"
                value="github.com/dhanisalghifari/"
                icon="/github.svg"
                className="mt-6"
              />

              <ContactItem
                label="Instagram"
                value="@dhanisalghifari"
                icon="/instagram.svg"
                className="mt-6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
