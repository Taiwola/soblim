"use client";
import { Logo } from "./icons";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import clsx from "clsx";
import GradientButton from "@/app/_components/gradientButton";
import { useState } from "react";
import { Menu } from "lucide-react";
import MobileNavBar from "@/app/_components/mobileNavBar";
import { NAV_LINK_STYLES } from "@/styles/styles";



export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="absolute top-0 left-0 w-full bg-transparent z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-10 md:px-10">
        {/* Brand Logo (left) */}
        <div className="flex max-w-fit items-center gap-3">
          <Logo />
          <p className="font-gothic text-background medium-text">Soblim Trading</p>
        </div>
        {/* Navigation Links (center) - Desktop only */}
        <ul className="mx-8 hidden flex-1 justify-center gap-4 md:flex">
          {siteConfig.navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={clsx(NAV_LINK_STYLES.base, NAV_LINK_STYLES.hover, NAV_LINK_STYLES.active)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* CTA Button (right) - Desktop only */}
        <Link href={'#brand'} className="hidden flex-shrink-0 md:flex">
          <GradientButton text="Brand Partner" />
        </Link>
        {/* Mobile Menu Toggle Button */}
        <button
          className="flex items-center justify-center p-2 md:hidden cursor-pointer"
          aria-label="Open navigation menu"
          onClick={toggleMenu}
        >
          <Menu size={28} className="text-white"/>
        </button>
      </nav>
      {/* Mobile Drawer Navigation */}
      <MobileNavBar isOpen={menuOpen} onOpenChange={closeMenu} />
    </header>
  );
}