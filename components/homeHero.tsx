"use client"

import { FaCircleCheck } from "react-icons/fa6"
import GradientButton from "../app/_components/gradientButton"
import { Button } from "@heroui/button"
import { useState } from "react";
import OverLay from "./overlay";

const TRUST_BADGE_TEXT = "Trusted by over 10K people";
const HERO_HEADLINE = "Your Trusted Partner for Quality Products & Services";
const HERO_SUBHEADING =
  "Delivering high-quality goods and services across Nigeria and Africa — reliable, efficient, and customer-focused.";

export default function HomeHero() {
  const [openOverlay, setOpenOverlay] = useState<boolean>(false)

  return (
    <section className="relative pt-11 md:pt-0 w-full h-[516px] md:h-[726px] bg-cover bg-center z-10 bg-[url('/images/hero.png')]">
      {/* Content Container */}
      <div className="flex h-full flex-col items-center justify-center gap-8 px-4 md:px-0 ">
      {/* Trust Badge */}
        <div className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#FFEEE029] px-4 py-2 text-[#E9E9E9]">
          <FaCircleCheck size={16} />
          <p className="text-sm font-normal md:text-base">{TRUST_BADGE_TEXT}</p>
        </div>

        {/* Headline */}
        <div className="max-w-6xl">
          <h1 className="text-center text-2xl font-bold uppercase leading-tight text-white md:text-6xl md:leading-snug">
            {HERO_HEADLINE}
          </h1>
        </div>

        {/* Subheading */}
        <div className="max-w-4xl">
          <p className="text-center text-xs font-normal text-[#e9e9e9bb] md:text-2xl md:leading-relaxed">
            {HERO_SUBHEADING}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8 pt-4">
          <div>
          <GradientButton text="Contact us" setOpenOverlay={setOpenOverlay} />
          </div>
          <Button
            variant="ghost"
            className="rounded-4xl border border-white px-7 py-5 font-sans text-white hover:bg-white/10 transition-colors"
          >
            Get a Quote
          </Button>
        </div>
      </div>
      <OverLay openOverlay={openOverlay} setOpenOverlay={setOpenOverlay} />
    </section>
    );
}






