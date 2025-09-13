"use client"

import { useDisclosure } from "@heroui/react"
import Image from "next/image"
import Link from "next/link"
import MobileNavBar from "./mobile-nav"
import { RiMenu3Line } from "react-icons/ri"
import GradientButton from "./gradient-button"

export default function Header() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <>
      <div className="w-full absolute top-0 z-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-9">
            <div className="flex justify-center items-center gap-3.5">
              <div className="w-9 h-9 md:w-11 md:h-11 ">
                <Image
                  src={"/images/logo.png"}
                  alt="logo"
                  width={47}
                  height={47}
                  className="w-full h-full"
                />
              </div>
              <h2 className="font-dela-gothic font-normal text-white text-base md:text-[20px]">
                Soblim Trading
              </h2>
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center justify-center gap-2.5">
                <li>
                  <Link
                    href={"#home"}
                    className="font-sans font-medium text-[16px] hover:border-b text-[#DEDEDE]"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#about"}
                    className="font-sans font-medium hover:border-b text-[16px] text-[#DEDEDE]"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#values"}
                    className="font-sans font-medium hover:border-b text-[16px] text-[#DEDEDE]"
                  >
                    Values
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#products"}
                    className="font-sans font-medium hover:border-b text-[16px] text-[#DEDEDE]"
                  >
                    Products
                  </Link>
                </li>
              </ul>
            </div>
            <div className="hidden md:block">
              <GradientButton text="Contact us" />
            </div>
            <div className="cursor-pointer md:hidden" onClick={onOpen}>
              <RiMenu3Line className="w-6 h-6 text-[#FFFFFF]" />
            </div>
          </div>
        </div>
      </div>
      <MobileNavBar isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  )
}
