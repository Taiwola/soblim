import { partnerImage } from "@/config/site";
import Image from "next/image";

export default function Partner() {
  return (
    <section className="w-full bg-light-pink py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-6">
          <div className="text-center flex flex-col gap-4 justify-center items-center">
            <h1 className="big-text">Major Brand Partners</h1>
            <p className="small-text max-w-xl">
              We&apos;re proud to work with some of the world&apos;s most
              innovative companies and trusted brands across various industries.
            </p>
          </div>

          <div className="flex justify-center items-center gap-1 md:gap-6">
            {partnerImage.map((partner, index) => (
              <div key={index}>
                <Image
                  src={partner.url}
                  alt={partner.alt}
                  width={partner.width}
                  height={partner.height}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
