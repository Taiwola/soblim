"use client"

import { MdHomeFilled } from "react-icons/md"
import { FaMobile } from "react-icons/fa"
import { PiCigaretteLight } from "react-icons/pi"
import { BsStars } from "react-icons/bs"
import Card from "./card"

export default function Offer() {
  return (
    <div className="w-full bg-[#FFFBF8] py-14">
      <div className="container mx-auto">
        <div className="text-center flex flex-col gap-10">
          <h2 className="font-sans font-bold text-[26px] md:text-6xl">
            What we offer
          </h2>
          <p className="font-sans font-normal md:text-[22px] text-[#595959] text-sm">
            Discover our comprehensive range of high-quality products designed
            to <br className="hidden md:block" /> meet your everyday needs with
            excellence and reliability.
          </p>
          <div className="flex flex-col md:flex-row gap-[28px]">
            <Card
              icon={MdHomeFilled}
              title="Household Items"
              description="Premium quality household products for everyday living"
              linkHref="/learn"
              className="flex-col flex justify-center items-center"
              textClassName="flex flex-col justify-center items-center text-center"
            />
            <Card
              icon={FaMobile}
              title="Mobile Gadgets"
              description="Latest smartphone accessories and tech gadgets"
              linkHref="/learn"
              className="flex-col flex justify-center items-center"
              textClassName="flex flex-col justify-center items-center text-center"
            />
            <Card
              icon={PiCigaretteLight}
              title="Smoke Essentials"
              description="Quality smoking accessories and related products"
              linkHref="/learn"
              className="flex-col flex justify-center items-center"
              textClassName="flex flex-col justify-center items-center text-center"
            />
            <Card
              icon={BsStars}
              title="Beauty & Fashion"
              description="Trendy beauty products and fashion accessories"
              linkHref="/learn"
              className="flex-col flex justify-center items-center"
              textClassName="flex flex-col justify-center items-center text-center"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
