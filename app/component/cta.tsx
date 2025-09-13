"use client"

import { Button } from "@heroui/react"
import GradientButton from "./gradient-button"

export default function CTA() {
  return (
    <div className="w-full py-14">
      <div className="container mx-auto">
        <div className="bg-[url('/images/hero.png')] bg-cover bg-center w-full h-[256px] md:h-[459px] rounded-2xl flex justify-center items-center">
          <div className="text-center flex flex-col gap-3.5">
            <h1 className="font-sans font-bold text-[#FAFAFA] text-[22px] md:text-6xl text-center">
              Ready to Experience <br className="hidden md:block" /> Quality
              Products & Services?
            </h1>
            <p className="font-sans font-normal text-xs md:text-[22px] text-[#D9D9D9]">
              Join thousands of satisfied customers who trust Solbim Trading for
              their <br className="hidden md:block" /> product needs. Get
              started today and experience the difference.
            </p>

            <div className="flex gap-6 justify-center items-center">
              <GradientButton text="Contact Us" />
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
    </div>
  )
}
