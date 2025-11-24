import GradientButton from "@/app/_components/gradientButton";
import Image from "next/image";
import { BadgeIcon, BadgeIcon2 } from "./icons";

const COMPANY_NAME = "Solbim Trading Ltd Co.";
const COMPANY_REG = "RC 1350695";
const INTRO = `${COMPANY_NAME} is a reputable trading company that has been operating since 2016. As a registered company (${COMPANY_REG}), we are committed to providing exceptional goods and services to our valued customers.`;
const SUMMARY =
  "Our core focus is on the sale of products and general merchandising, but we also engage in various other business activities to meet our customers' evolving needs.";
const CTA_LABEL = "Learn More";

export default function About() {
  return (
    <section id={"company"} aria-labelledby="about-heading" className="w-full py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center md:items-center">
          {/* Image first on mobile, text first on desktop */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end md:h-[450px] h-[350px]">
            <div className="relative max-w-[600px]">
              <Image
                src="/images/about.png"
                alt="About Solbim Trading"
                width={600}
                height={1000}
              />

              {/* Badge - positioned relative to image */}
              <div className="absolute top-7 left-4 bg-white/95 text-foreground px-3 py-2 rounded-md shadow-md text-sm font-semibold">
               <div className="inline-flex gap-2 justify-center items-center">
                <BadgeIcon /> 
                <p>8+ Years Experience</p>
               </div>
              </div>

              {/* Secondary badge (example) - bottom-left on larger screens */}
              <div className="absolute right-4 bottom-10 hidden md:block bg-white/95 text-foreground px-3 py-2 rounded-md shadow-md text-sm font-semibold">
                <div className="inline-flex gap-2 justify-center items-center">
                <BadgeIcon2 /> 
                <p>10k+ Happy Customers</p>
               </div>
              </div>
            </div>
          </div>

          {/* Text column (moves under image on mobile) */}
          <div className="order-2 md:order-1 flex flex-col gap-4 justify-center items-center md:justify-start md:items-start">
            <h2 id="about-heading" className="big-text mb-4">
              Who we are
            </h2>

            <p className="mb-4 small-text">{INTRO}</p>

            <p className="mb-6 small-text">{SUMMARY}</p>

            <div className="flex justify-center md:justify-start">
              <GradientButton text={CTA_LABEL} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}