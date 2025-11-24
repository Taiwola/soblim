import { contactData } from "@/config/site";
import ContactForm from "./contactForm";

export default function ContactUs() {
  return (
    <section id="contact" className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-5 md:gap-0 md:justify-between flex-col md:flex-row">
          <div className="flex flex-col gap-6 w-full">
            <h1 className="big-text">Get in Touch</h1>
            <p className="small-text max-w-xl">
              Ready to start your journey with quality products and exceptional
              service? Contact us today.
            </p>

            <div className="flex flex-col gap-6">
              {contactData.map((contact, index) => (
                <div className="flex gap-4 items-start" key={index}>
                  <div className="bg-[radial-gradient(circle_at_center,#F57A20,#F5A460)] border border-[#DB7525] p-2.5 rounded-sm shadow">
                    <contact.icon className="text-[#FFFFFF]" />
                  </div>
                  <div>
                    <h1 className="medium-text">{contact.title}</h1>
                    <div>
                      {contact.details.map((detail, index) => (
                        <p key={index} className="small-text text-[#595959]">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* contact form */}
         <ContactForm />
        </div>
      </div>
    </section>
  );
}
