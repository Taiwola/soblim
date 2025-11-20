"use client";

import Image from "next/image";
import Link from "next/link";
import { TbBrandFacebook } from "react-icons/tb"
import { FaXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
import { FiLinkedin } from "react-icons/fi"

// Define social links once – easy to update
const socialLinks = [
  { Icon: TbBrandFacebook, href: "https://facebook.com/yourpage", label: "Facebook" },
  { Icon: FaXTwitter, href: "https://twitter.com/yourhandle", label: "Twitter" },
  { Icon: FaInstagram, href: "https://instagram.com/yourprofile", label: "Instagram" },
  { Icon: FiLinkedin, href: "https://linkedin.com/company/yourcompany", label: "LinkedIn" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-cover bg-right-bottom py-14 md:py-20" style={{ backgroundImage: "url('/images/hero.png')" }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-10 md:gap-12">
          {/* Top Section: Logo + Description + Socials */}
          <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-12">
            {/* Brand & Description */}
            <div className="max-w-md">
              <div className="flex items-center gap-3.5 mb-4">
                <Image
                  src="/images/logo.png"
                  alt="Soblim Trading Logo"
                  width={38}
                  height={37}
                  className="w-10 h-10 object-contain"
                />
                <h2 className="font-dela-gothic text-white text-xl md:text-2xl">
                  Soblim Trading
                </h2>
              </div>
              <p className="text-[#C8C8C8] text-base md:text-lg leading-relaxed">
                Your trusted partner for quality products and services across Nigeria and Africa.
              </p>
            </div>

            {/* Social Media Icons */}
            <ul className="flex items-center gap-4 md:gap-6">
              {socialLinks.map(({ Icon, href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${label}`}
                    className="block p-3 bg-white/30 backdrop-blur-sm rounded-lg hover:bg-white/40 transition-colors duration-200"
                  >
                    <Icon className="text-2xl text-white" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Section: Copyright + Legal Links */}
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row md:justify-between gap-6 text-[#C8C8C8]">
            <p className="text-sm md:text-base">
              © {currentYear} Soblim Trading Ltd Co. All rights reserved.
            </p>

            <nav className="flex flex-wrap gap-6 text-sm md:text-base">
              <Link href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition">
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}