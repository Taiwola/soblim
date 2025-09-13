"use client"
import { FaCircleCheck } from "react-icons/fa6"
import GradientButton from "./gradient-button"
import { Button } from "@heroui/react"

export default function Hero() {
  return (
    <div className="bg-[url('/images/hero.png')] bg-cover bg-center h-[416px] md:h-[726px] w-full">
      <div className="pt-24 md:pt-48 md:px-[172px]">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="bg-[#FFEEE029]/16 rounded-[50px] py-2 text-[#E9E9E9] px-4 flex items-center justify-center gap-2.5">
            <FaCircleCheck />
            <p className="font-normal font-sans text-sm md:text-base">
              Trusted by over 10K people
            </p>
          </div>
          <div>
            <h1 className="uppercase font-bold text-2xl md:text-6xl text-center text-[#FFFFFF]">
              Your Trusted Partner for Quality Products & Services
            </h1>
          </div>
          <div>
            <p className="font-sans font-normal text-center text-xs md:text-2xl text-[#E9E9E9] leading-tight">
              Delivering high-quality goods and services across Nigeria and
              Africa — reliable, efficient, and customer-focused.{" "}
            </p>
          </div>

          <div className="flex gap-8">
            <GradientButton text="Contact us" />
            <Button
              variant="ghost"
              className="border-1 font-sans rounded-4xl text-white py-[20px] px-[30px]"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
