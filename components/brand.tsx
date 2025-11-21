"use client"
import SwiperCarousel from "@/app/_components/swipper";
import { brandConfig } from "@/config/site";
import { SwiperSlide } from "swiper/react";

export default function Brand() {
  return (
    <section id="values" className="bg-light-pink py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 justify-center items-center text-center">
            <h1 className="big-text">Our Brand Values</h1>
            <p className="small-text">
              The core principles that guide everything we do at Solbim Trading
            </p>
          </div>

          <div className="hidden md:grid grid-cols-3 items-center gap-4">
            {brandConfig.map((brand, index) => (
                <div key={index} className="bg-white shadow-lg p-10 gap-4 rounded flex flex-col items-start transition-transform hover:scale-105">
                    <div className="bg-[radial-gradient(circle_at_center,#F57A20,#F5A460)] rounded-[3px] p-2 border-[#DB7525] shadow-amber-400">
                        <brand.icon className="w-6 h-6 text-[#FAFAFA]"/>
                    </div>
                    <h1 className="medium-text">{brand.title}</h1>
                    <p className="small-text">{brand.description}</p>
                </div>
            ))}
          </div>
            <div className="md:hidden">
                      <SwiperCarousel
                       spaceBetween={20}
                          slidesPerView={1.2}
                          slidesPerGroup={1}
                          infinite={false}
                      className="w-full overflow-visible">
                        {brandConfig.map((brand, index) => (
                          <SwiperSlide key={index}>
                <div key={index} className="bg-white shadow-lg p-10 gap-4 h-[200px] rounded flex flex-col items-start transition-transform hover:scale-105">
                    <div className="bg-[radial-gradient(circle_at_center,#F57A20,#F5A460)] rounded-[3px] p-2 border-[#DB7525] shadow-amber-400">
                        <brand.icon className="w-6 h-6 text-[#FAFAFA]"/>
                    </div>
                    <h1 className="medium-text">{brand.title}</h1>
                    <p className="small-text">{brand.description}</p>
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
