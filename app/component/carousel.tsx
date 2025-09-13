"use client" // Client component for interactivity

import React from "react"
import Slider, { Settings } from "react-slick"
import WhyChooseUsCard from "./why-choose-us-card"

interface SlickCarouselProps {
  spaceBetween?: number
  slidesToShow?: number
  slidesToScroll?: number
  infinite?: boolean
  className?: string
}

export default function SlickCarousel({
  spaceBetween = 20,
  slidesToShow = 1,
  slidesToScroll = 1,
  infinite = false,
  className = "",
}: SlickCarouselProps) {
  const settings: Settings = {
    dots: true,
    arrows: false,
    infinite,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    variableWidth: false, // For "auto" mode if needed
    swipeToSlide: true,
    touchThreshold: 10,
  }

  return (
    <div className={className}>
      <Slider {...settings}>
        <WhyChooseUsCard
          title="High-Quality Products"
          description="Premium quality guaranteed across all our product lines."
        />
        <WhyChooseUsCard
          title="Great Customer Service"
          description="Dedicated support team committed to your satisfaction"
        />
        <WhyChooseUsCard
          title="Timely Delivery"
          description="Fast and reliable delivery across Nigeria and Africa"
        />
        <WhyChooseUsCard
          title="Satisfaction Guarantee"
          description="100% satisfaction guarantee on every purchase"
        />
        <WhyChooseUsCard
          title="Innovation & Technology"
          description="Cutting-edge solutions and modern business practices"
        />
        <WhyChooseUsCard
          title="Sustainability Focus"
          description="Committed to environmentally responsible business practices"
        />
      </Slider>
    </div>
  )
}
