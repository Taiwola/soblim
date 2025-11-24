import { testimonialData } from "@/config/site";
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";

export default function Customers() {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col justify-center items-center text-center gap-6">
            <h1 className="big-text"> What Our Customers Say</h1>
            <p className="small-text max-w-xl">
              Don&apos;t just take our word for it. Here&apos;s what our
              satisfied customers have to say about their experience with Solbim
              Trading.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
            {testimonialData.map((testimonial, index) => (
              <div
                className="shadow-lg p-4 border-1 border-white flex flex-col gap-4"
                key={index}
              >
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <BsStarFill key={item} className="text-[#FFC233]" />
                  ))}
                </div>
                <div>
                  <p className="small-text">&quot;{testimonial.quote}&quot;</p>
                </div>
                <div className="flex gap-3 items-center">
                  <div>
                    <Image
                      src={testimonial.imageSrc}
                      alt={testimonial.imageAlt}
                      width={48.16}
                      height={48.16}
                    />
                  </div>
                  <div>
                    <h1 className="medium-text">{testimonial.name}</h1>
                    <p className="small-text">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
