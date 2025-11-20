import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Drawer, DrawerContent, DrawerHeader, DrawerBody } from "@heroui/drawer";
import { siteConfig } from "@/config/site";
import clsx from "clsx";
import { X } from "lucide-react";
import GradientButton from "./gradientButton";
import { MOBILE_NAV_LINK_STYLES } from "@/styles/styles";



// Constants for drawer and layout
const LOGO_IMAGE = {
  src: "/images/logo-menu.png",
  width: 42,
  height: 42,
  alt: "Soblim Trading logo",
};

const BRAND_NAME = "Soblim Trading";

export default function MobileNavBar({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        size="full"
        placement="top"
        onOpenChange={onOpenChange}
        hideCloseButton
      >
        <DrawerContent>
          {() => (
            <div className="relative min-h-screen">
              {/* Close Button */}
              <button
                className="absolute left-1/2 top-6 -translate-x-1/2 text-[var(--foreground)] cursor-pointer"
                aria-label="Close navigation menu"
                onClick={onOpenChange}
              >
                <X size={20} />
              </button>

              {/* Header with Logo */}
              <DrawerHeader className="mt-6 flex flex-col gap-1 py-9">
                <div className="flex items-center justify-center gap-2.5">
                  <div>
                    <Image
                      src={LOGO_IMAGE.src}
                      width={LOGO_IMAGE.width}
                      height={LOGO_IMAGE.height}
                      alt={LOGO_IMAGE.alt}
                    />
                  </div>
                  <p className="font-semibold">{BRAND_NAME}</p>
                </div>
              </DrawerHeader>

              {/* Navigation Links */}
              <DrawerBody>
                <ul className="flex flex-col items-center justify-center gap-2.5">
                  {siteConfig.navItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={clsx(
                          MOBILE_NAV_LINK_STYLES.base,
                          MOBILE_NAV_LINK_STYLES.hover,
                          MOBILE_NAV_LINK_STYLES.active,
                        )}
                        onClick={onOpenChange}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-6 flex justify-center">
                  <GradientButton text="Contact us" />
                </div>
              </DrawerBody>
            </div>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
