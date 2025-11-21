import GradientButton from "@/app/_components/gradientButton";
import { contactData } from "@/config/site";
import { Input, Textarea } from "@heroui/input";

export default function ContactUs() {
  return (
    <section className="w-full py-16">
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
          <div className="border border-white shadow-md w-full p-4">
            <div className="flex flex-col gap-6">
              <h1 className="medium-text">Send us a Message</h1>

                <form action="">
                    <div className="flex flex-col gap-6">
                  <Input
                    isRequired
                    errorMessage="Please enter a valid name"
                    label="Full Name"
                    labelPlacement="outside"
                    name="FullName"
                    placeholder="Jane Doe"
                    type="text"
                    className="text-[18px] font-normal font-sans"
                  />

                  <Input
                    isRequired
                    errorMessage="Please enter a valid email"
                    label="Email"
                    labelPlacement="outside"
                    name="email"
                    placeholder="JaneDoe@gmail.com"
                    type="email"
                    className="text-[18px] font-normal font-sans"
                  />

                  <Input
                    isRequired
                    errorMessage="Please enter a valid number"
                    label="Phone Number"
                    labelPlacement="outside"
                    name="phoneNumber"
                    placeholder="Enter Phone Number"
                    type="text"
                    className="text-[18px] font-normal font-sans"
                  />

                  <Textarea
                    isRequired
                    className="w-full text-[18px] font-normal font-sans"
                    label="Description"
                    labelPlacement="outside"
                    placeholder="Enter your description"
                  />

                  <GradientButton text="Contact Us" className="w-full" />
              </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
