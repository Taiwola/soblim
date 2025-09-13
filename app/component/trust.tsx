"use client"

import Image from "next/image"

interface StatCardData {
  number: string
  title: string
  description: string
}

const statCardData: StatCardData[] = [
  {
    number: "65+",
    title: "Branded Smartwatches",
    description: "Premium watch collection",
  },
  {
    number: "30K",
    title: "Daily Visitors",
    description: "Growing customer base",
  },
  {
    number: "50+",
    title: "Awards Won",
    description: "Industry recognition",
  },
  {
    number: "100%",
    title: "Customer Satisfaction",
    description: "Premium watch collection",
  },
]

export default function Trust() {
  return (
    <div className="w-full py-14">
      <div className="container mx-auto">
        <div className="flex gap-10 flex-col-reverse w-full md:flex-row">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/trust.png"
              alt="trust"
              width={526.21}
              height={526.21}
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-10">
            <div className="w-full flex flex-col gap-4">
              <h2 className="font-sans font-bold text-[26px] md:text-5xl">
                Trusted by Thousands
              </h2>
              <p className="font-sans font-normal md:text-[22px] text-[#595959] text-sm">
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
    </div>
  )
}
