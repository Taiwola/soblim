"use client"

import { RiPhoneFill } from "react-icons/ri"
import { IoMdMail } from "react-icons/io"
import { FaLocationDot } from "react-icons/fa6"
import { Form, Input, Textarea } from "@heroui/react"
import GradientButton from "./gradient-button"

interface ContactData {
  icon: React.ElementType
  title: string
  details: string[]
}

const contactData: ContactData[] = [
  {
    icon: RiPhoneFill,
    title: "Phone",
    details: ["+234 (0) 123 456 7890", "+234 (0) 987 654 3210"],
  },
  {
    icon: IoMdMail,
    title: "Email",
    details: ["info@solbimtrading.com", "support@solbimtrading.com"],
  },
  {
    icon: FaLocationDot,
    title: "Office Address",
    details: ["info@solbimtrading.com", "support@solbimtrading.com"],
  },
]

export default function ContactUs() {
  return (
    <div className="w-full py-14">
      <div className="container mx-auto">
        <div className="flex md:justify-between flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-10 w-full py-12">
            <div className="flex flex-col gap-4">
              <h2 className="font-sans font-bold text-[26px] md:text-4xl">
                Get in Touch
              </h2>
              <p className="font-sans font-normal md:text-[22px] text-[#595959] text-xs">
                Ready to start your journey with quality products and
                exceptional service? Contact us today.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {contactData.map((contact, index) => (
                <div key={index} className="flex items-start gap-7">
                  <div className="bg-[radial-gradient(circle_at_center,#F57A20,#F5A460)] border border-[#DB7525] p-2.5 rounded-sm shadow">
                    <contact.icon className="text-2xl text-[#FFFFFF]" />
                  </div>
                  <div>
                    <h1 className="font-sans font-bold text-lg">
                      {contact.title}
                    </h1>
                    {contact.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className="font-sans font-normal text-[#595959] text-sm"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* contact form */}
          <div className="bg-[#FCFCFC] py-6 px-4 md:p-10 w-full shadow-lg rounded-4xl">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="font-sans font-bold md:text-2xl">
                  Send Us a Message
                </h2>
              </div>
              <div>
                <Form className="flex flex-col gap-8">
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

                  <Textarea
                    isRequired
                    className="w-full text-[18px] font-normal font-sans"
                    label="Description"
                    labelPlacement="outside"
                    placeholder="Enter your description"
                  />

                  <GradientButton text="Contact Us" className="w-full" />
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
