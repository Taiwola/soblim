"use client"

import { Dispatch, SetStateAction } from "react"
import ContactForm from "./contactForm"
import { X } from "lucide-react"

type OverlayProps = {
  setOpenOverlay: Dispatch<SetStateAction<boolean>>
  openOverlay: boolean
}

export default function OverLay({openOverlay, setOpenOverlay}: OverlayProps) {
  console.log(openOverlay)

  return <section className={`${openOverlay ? "fixed top-0 left-0 right-0 w-full h-dvh flex justify-center items-center z-1000 text-black backdrop-blur-md" : "hidden"}`}>
 <div className="flex flex-col gap-4">
  <div className="flex justify-end items-center">
     <X className="text-white cursor-pointer" onClick={() =>setOpenOverlay(false)} />
  </div>
     <div className="max-w-fit">
    <ContactForm />
    </div>
 </div>
    
  </section>
}