"use client"

import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react"
import Image from "next/image"
import { BsStarFill } from "react-icons/bs"

interface TestimonialData {
  quote: string
  imageSrc: string
  imageAlt: string
  name: string
  title: string
}

const testimonialData: TestimonialData[] = [
  {
    quote:
      "Exceptional quality and outstanding customer service. Solbim Trading has been our go-to partner for all our product needs.",
    imageSrc: "/images/customer1.png",
    imageAlt: "customer 1",
    name: "Adebayo Johnson",
    title: "Business Owner",
  },
  {
    quote:
      "The reliability and efficiency of their delivery service is unmatched. Highly recommended for any business looking for quality products.",
    imageSrc: "/images/customer3.png",
    imageAlt: "customer 2",
    name: "Fatima Ibrahim",
    title: "Procurement Manager",
  },
  {
    quote:
      "Innovative solutions and excellent support. They understand our needs and consistently deliver beyond expectations.",
    imageSrc: "/images/customer2.png",
    imageAlt: "customer 3",
    name: "Chidi Okafor",
    title: "Store Manager",
  },
]

export default function Customer() {
  return (
    <div className="w-full py-14">
      <div className="container mx-auto">
        <div className="text-center flex flex-col gap-10">
          <h2 className="font-sans font-bold text-[26px] md:text-6xl">
            What Our Customers Say
          </h2>
          <p className="font-sans font-normal md:text-[22px] text-[#595959] text-sm">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied
            customers have to say about their experience with Solbim Trading.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonialData.map((testimonial, index) => (
              <Card key={index}>
                <CardHeader className="flex gap-2.5">
                  <BsStarFill className="text-[#FFC233]" />
                  <BsStarFill className="text-[#FFC233]" />
                  <BsStarFill className="text-[#FFC233]" />
                  <BsStarFill className="text-[#FFC233]" />
                  <BsStarFill className="text-[#FFC233]" />
                </CardHeader>
                <CardBody>
                  <p className="font-normal font-sans text-base text-[#7F7F7F]">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </CardBody>
                <CardFooter className="flex gap-3">
                  <div>
                    <Image
                      src={testimonial.imageSrc}
                      alt={testimonial.imageAlt}
                      width={48.16}
                      height={48.16}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h2 className="font-sans font-bold text-[17px]">
                      {testimonial.name}
                    </h2>
                    <p className="font-normal font-sans text-base text-[#7F7F7F]">
                      {testimonial.title}
                    </p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
