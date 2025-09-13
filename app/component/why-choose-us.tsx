"use client"

import { SwiperSlide } from "swiper/react"
import SwiperCarousel from "./swiperCarousel"
import WhyChooseUsCard from "./why-choose-us-card"

interface CardData {
  title: string
  description: string
}

const cardData: CardData[] = [
  {
    title: "High-Quality Products",
    description: "Premium quality guaranteed across all our product lines.",
  },
  {
    title: "Great Customer Service",
    description: "Dedicated support team committed to your satisfaction",
  },
  {
    title: "Timely Delivery",
    description: "Fast and reliable delivery across Nigeria and Africa",
  },
  {
    title: "Satisfaction Guarantee",
    description: "100% satisfaction guarantee on every purchase",
  },
  {
    title: "Innovation & Technology",
    description: "Cutting-edge solutions and modern business practices",
  },
  {
    title: "Sustainability Focus",
    description: "Committed to environmentally responsible business practices",
  },
]

export default function WhyChooseUs() {
  return (
    <div className="w-full py-14">
      <div className="container mx-auto">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col text-center md:text-left md:flex-row md:justify-between">
            <h1 className="font-sans font-bold text-[26px] md:text-6xl">
              Why Choose Solbim Trading
            </h1>
            <p className="font-sans font-normal md:text-[22px] text-[#595959] text-sm">
              We stand out from the competition with our unwavering commitment
              to quality, innovation, and customer satisfaction.
            </p>
          </div>
          <div>
            <div className="hidden md:grid md:grid-cols-3 md:gap-2.5 md:gap-y-5">
              {cardData.map((card, index) => (
                <WhyChooseUsCard
                  key={index}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
            <div className="md:hidden">
              <SwiperCarousel
                spaceBetween={20}
                slidesPerView={1.2}
                slidesPerGroup={1}
                infinite={false}
                className="w-full overflow-visible"
              >
                {cardData.map((card, index) => (
                  <SwiperSlide key={index}>
                    <WhyChooseUsCard
                      title={card.title}
                      description={card.description}
                    />
                  </SwiperSlide>
                ))}
              </SwiperCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
