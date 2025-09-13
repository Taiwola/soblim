import Image from "next/image"

export default function BrandPartner() {
  return (
    <div className="w-full bg-[#FFFBF8] py-14">
      <div className="container mx-auto">
        <div className="text-center flex flex-col gap-10">
          <h2 className="font-sans font-bold text-[26px] md:text-6xl">
            Major Brand Partners
          </h2>
          <p className="font-sans font-normal md:text-[22px] text-[#595959] text-sm">
            We&apos;re proud to work with some of the world&apos;s most
            innovative companies and trusted brands across various industries.
          </p>

          <div className="flex justify-center items-center gap-1 md:gap-14">
            <div>
              <Image
                src={"/images/jendol.png"}
                alt="jendol"
                width={300}
                height={52.6}
              />
            </div>
            <div>
              <Image
                src={"/images/oldenglish.png"}
                alt="jendol"
                width={300}
                height={52.6}
              />
            </div>
            <div>
              <Image
                src={"/images/ojajamore.png"}
                alt="jendol"
                width={300}
                height={52.6}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
