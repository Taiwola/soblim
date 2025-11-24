"use client";
import SwiperCarousel from "@/app/_components/swipper";
import { chooseConfig } from "@/config/site";
import { SwiperSlide } from "swiper/react";

export default function Choose() {
  return (
    <section className="w-full py-16 bg-light-pink">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center justify-center md:flex md:flex-row md:justify-between md:items-center md:text-left text-center">
            <h1 className="big-text max-w-xl">Why Choose Solbim Trading</h1>
            <p className="small-text max-w-xl">
              We stand out from the competition with our unwavering commitment
              to quality, innovation, and customer satisfaction.
            </p>
          </div>
          <div className="hidden md:grid grid-cols-3 items-center gap-4">
            {chooseConfig.map((choose, index) => (
              <div
                key={index}
                className="border-b-5 border-[#DB7525] p-8 shadow-lg rounded flex flex-col gap-6 transition-transform hover:scale-105 bg-white"
              >
                <h1 className="medium-text">{choose.title}</h1>
                <p className="small-text">{choose.description}</p>
              </div>
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
              {chooseConfig.map((choose, index) => (
                <SwiperSlide key={index}>
                  <div
                    key={index}
                    className="border-b-5 border-[#DB7525] p-8 shadow-lg h-[160px] md:h-fit rounded flex flex-col gap-6 transition-transform hover:scale-105 bg-white"
                  >
                    <h1 className="medium-text">{choose.title}</h1>
                    <p className="small-text">{choose.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </SwiperCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}
