"use client"

import Image from "next/image"
import { TbBrandFacebook } from "react-icons/tb"
import { FaXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
import { FiLinkedin } from "react-icons/fi"
import Link from "next/link"

export default function Footer() {
  return (
    <div className="w-full bg-[url('/images/hero.png')] bg-cover bg-right-bottom py-14">
      <div className="container mx-auto">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col md:flex-row md:justify-between gap-5">
            <div className="flex flex-col">
              <div className="flex items-center gap-3.5">
                <div>
                  <Image
                    src={"/images/logo.png"}
                    alt="logo"
                    width={38}
                    height={37}
                    className="w-full h-full"
                  />
                </div>
                <h2 className="font-dela-gothic font-normal text-white text-base md:text-[20px]">
                  Soblim Trading
                </h2>
              </div>
              <p className="font-sans text-[#C8C8C8] md:text-[20px]">
                Your trusted partner for quality products and services across
                Nigeria and Africa.{" "}
              </p>
            </div>
            <div>
              <ul className="flex items-center gap-6 md:gap-10">
                <li>
                  <div className="bg-[#FFFFFF4D] rounded-[7px] p-2.5">
                    <Link href={"#"}>
                      <TbBrandFacebook className="text-2xl text-white" />
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="bg-[#FFFFFF4D] rounded-[7px] p-2.5">
                    <Link href={"/"}>
                      <FaXTwitter className="text-2xl text-white" />
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="bg-[#FFFFFF4D] rounded-[7px] p-2.5">
                    <Link href={"/"}>
                      <FaInstagram className="text-2xl text-white" />
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="bg-[#FFFFFF4D] rounded-[7px] p-2.5">
                    <Link href={"/"}>
                      <FiLinkedin className="text-2xl text-white" />
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-5 md:flex-row md:justify-between border-t border-[#BBBABB30] pt-6">
            <div>
              <p className="text-[#C8C8C8] font-normal md:text-base font-sans">
                © 2025 Solbim Trading Ltd Co. All rights reserved.
              </p>
            </div>
            <div className="flex gap-5 text-[#C8C8C8]">
              <p className="font-normal md:text-base font-sans">
                Privacy Policy
              </p>
              <p className="font-normal md:text-base font-sans">
                Terms of Service
              </p>
              <p className="font-normal md:text-base font-sans">
                Cookie Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
