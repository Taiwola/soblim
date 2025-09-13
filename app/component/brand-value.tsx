"use client"

import Card from "./card"
import { RiBox3Fill } from "react-icons/ri"
import { IoFlash } from "react-icons/io5"
import { RiLightbulbFlashFill } from "react-icons/ri"
import { FaHeart } from "react-icons/fa"
import { RiLeafFill } from "react-icons/ri"
import { FaMedal } from "react-icons/fa"
import { IconType } from "react-icons"
import SwiperCarousel from "./swiperCarousel"
import { SwiperSlide } from "swiper/react"

interface CardData {
  icon: IconType
  title: string
  description: string
}

const cardData: CardData[] = [
  {
    icon: RiBox3Fill,
    title: "Consistency",
    description:
      "We maintain unwavering standards in every product and service we offer.",
  },
  {
    icon: IoFlash,
    title: "Efficiency",
    description:
      "We optimize processes to deliver swift and reliable solutions.",
  },
  {
    icon: RiLightbulbFlashFill,
    title: "Innovation",
    description:
      "We embrace creativity and forward-thinking to stay ahead in our industry.",
  },
  {
    icon: FaHeart,
    title: "Customer Focus",
    description:
      "We prioritize our customers’ needs and build lasting relationships.",
  },
  {
    icon: RiLeafFill,
    title: "Sustainability",
    description:
      "We are committed to responsible practices for a better future.",
  },
  {
    icon: FaMedal,
    title: "Quality Driven",
    description: "We strive for excellence in everything we do.",
  },
]

export default function BrandValue() {
  return (
    <div className="w-full bg-[#FFFBF8] py-14">
      <div className="container mx-auto">
        <div className="text-center flex flex-col gap-10">
          <h2 className="font-sans font-bold text-[26px] md:text-6xl">
            Our Brand Values
          </h2>
          <p className="font-sans font-normal md:text-[22px] text-[#595959] text-sm">
            The core principles that guide everything we do at Solbim Trading
          </p>
          <div className="hidden md:grid md:grid-cols-3 md:gap-2.5 md:gap-y-5">
            {cardData.map((card, index) => (
              <Card
                key={index}
                icon={card.icon}
                iconColor="#FAFAFA"
                iconBgColor={"#DB7525"}
                title={card.title}
                description={card.description}
                hidLink={true}
                className="flex flex-col justify-start items-start"
                textClassName="flex flex-col justify-start items-start text-left"
                iconClassName="bg-[radial-gradient(circle_at_center,#F57A20,#F5A460)]"
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
                  <Card
                    key={index}
                    icon={card.icon}
                    iconColor="#FAFAFA"
                    iconBgColor={"#DB7525"}
                    title={card.title}
                    description={card.description}
                    hidLink={true}
                    className="flex flex-col justify-start items-start"
                    textClassName="flex flex-col justify-start items-start text-left"
                    iconClassName="bg-[radial-gradient(circle_at_center,#F57A20,#F5A460)]"
                  />
                </SwiperSlide>
              ))}
            </SwiperCarousel>
          </div>
        </div>
      </div>
    </div>
  )
}
