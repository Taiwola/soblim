import React from "react"
import { Drawer, DrawerContent, DrawerHeader, DrawerBody } from "@heroui/react"
import Image from "next/image"
import Link from "next/link"

export default function MobileNavBar({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean
  onOpenChange: () => void
}) {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        size="full"
        placement="top"
        onOpenChange={onOpenChange}
      >
        <DrawerContent>
          {() => (
            <>
              <DrawerHeader className="flex flex-col gap-1 py-9">
                <div className="flex items-center gap-2.5 justify-center">
                  <div>
                    <Image
                      src={"/images/logo-menu.png"}
                      width={42}
                      height={42}
                      alt="logo"
                    />
                  </div>
                  <p>Soblim Trading</p>
                </div>
              </DrawerHeader>
              <DrawerBody>
                <ul className="flex flex-col items-center justify-center gap-2.5">
                  <li>
                    <Link
                      href={"#home"}
                      className="font-sans font-medium text-[16px] hover:border-b"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#about"}
                      className="font-sans font-medium hover:border-b text-[16px]"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#values"}
                      className="font-sans font-medium hover:border-b text-[16px]"
                    >
                      Values
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#products"}
                      className="font-sans font-medium hover:border-b text-[16px]"
                    >
                      Products
                    </Link>
                  </li>
                </ul>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  )
}
