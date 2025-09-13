"use client"
import Image from "next/image"
import GradientButton from "./gradient-button"

export default function AboutUs() {
  return (
    <div className="bg-[#FFFFFF] w-full py-14">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row w-full gap-6 md:gap-20 justify-center">
          <div className="w-full text-center md:text-left flex flex-col gap-3 py-8">
            <div className="w-full">
              <h2 className="font-sans font-bold text-[26px] md:text-6xl">
                Who We Are
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-sans font-normal md:text-[22px] text-[#595959] text-sm">
                Solbim Trading Ltd Co. is a reputable trading company that has
                been operating since 2016. As a registered company (RC 1350695),
                we are committed to providing exceptional goods and services to
                our valued customers.
              </p>
              <p className="font-sans px-2.5 md:px-0 font-normal md:text-[22px] text-[#595959] text-sm">
                Our core focus is on the sale of products and general
                merchandising, but we also engage in various other business
                activities to meet our customers&apos; evolving needs.
              </p>
            </div>

            <div>
              <GradientButton text="Learn More" />
            </div>
          </div>
          <div className="w-full">
            <Image
              src="/images/about.png"
              alt="about"
              width={600}
              height={469}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
