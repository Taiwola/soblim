"use client"

import React from "react"
import { Swiper } from "swiper/react"
import { Navigation, Pagination, A11y } from "swiper/modules"
import "swiper/css" // Required for layout and transitions
import "swiper/css/navigation"
import "swiper/css/pagination"

interface SwiperCarouselProps {
  spaceBetween?: number
  slidesPerView?: number
  slidesPerGroup?: number
  infinite?: boolean
  className?: string
  children?: React.ReactNode // Add children prop for reusable slides
}

export default function SwiperCarousel({
  spaceBetween = 20,
  slidesPerView = 1,
  slidesPerGroup = 1,
  infinite = false,
  className = "",
  children,
}: SwiperCarouselProps) {
  return (
    <div className={className}>
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        loop={infinite}
        touchEventsTarget="container" // Ensures touch works within the swiper container
        grabCursor={true} // Shows grab cursor on hover (optional, but improves UX)
        simulateTouch={true}
        pagination={{ enabled: false }} // No dots
        navigation={false} // No arrows
        modules={[Navigation, Pagination, A11y]} // Include modules (optional if not used)
        className="mySwiper"
      >
        {children} {/* Render passed children as slides */}
      </Swiper>
    </div>
  )
}
