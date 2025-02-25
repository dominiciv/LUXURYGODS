"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function RedirectButton() {
  const targetUrl =
    "https://api.whatsapp.com/send/?phone=999999999&text=Hola!+Mi+nombre+es+______+Vi+este+anuncio%2C+quiero+un+usuario+por+favor!+gracias.&type=phone_number&app_absent=0"

  return (
    <Button
      onClick={() => (window.location.href = targetUrl)}
      className="relative bg-transparent font-bold transition-all duration-300 ease-in-out transform hover:scale-110 border-2 border-transparent hover:border-golden hover:shadow-golden group animate-slow-pulse hover:animate-none h-[60px] w-[320px]"
    >
      <span className="relative z-10 text-xl text-black group-hover:text-white transition-colors duration-300 flex items-center justify-center gap-3 w-full">
        JUGAR AHORA
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/whatsapp.511x512-UFgewbT2m2KaQJ0vbFGSFM3iDMss1D.png"
          alt="WhatsApp"
          width={28}
          height={28}
          className="inline-block"
        />
      </span>
      <span className="absolute inset-0 bg-custom-bubble rounded-lg transition-opacity duration-300 group-hover:opacity-0"></span>
      <span className="absolute -inset-1 bg-gradient-to-r from-golden via-white to-golden rounded-lg blur-lg group-hover:opacity-75 opacity-0 transition-opacity duration-300"></span>
    </Button>
  )
}

