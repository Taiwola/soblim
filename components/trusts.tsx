import Image from "next/image";
import { BadgeIcon2 } from "./icons";
import { statCardData } from "@/config/site";

export default function Trusts() {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex md:flex-row flex-col-reverse md:gap-18 gap-6">
          <div className="relative max-w-[600px] ">
            <Image
              src="/images/trust.png"
              alt="trust"
              width={526.21}
              height={526.21}
              className="shadow-lg"
            />
            <div className="absolute right-[-60px] bottom-5 hidden md:block bg-white/95 text-foreground px-3 py-2 rounded-md shadow-md text-sm font-semibold">
              <div className="inline-flex gap-2 justify-center items-center">
                <BadgeIcon2 />
                <p>10k+ Happy Customers</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <div className="flex flex-col gap-6">
                <h1 className="big-text">
                    Trusted by Thousands
                </h1>
                <p className="small-text">
                    Our commitment to excellence has earned us recognition and the
                trust of customers across Nigeria and Africa.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {statCardData.map((card, index) => (
                <div key={index} className="flex flex-col gap-[7.33px]">
                  <h1 className="text-[#DB7525] font-sans font-bold text-4xl">
                    {card.number}
                  </h1>
                  <h2 className="font-medium font-sans text-[20.61px]">
                    {card.title}
                  </h2>
                  <p className="font-normal text-base font-sans text-[#595959]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
