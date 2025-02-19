"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function RedirectButton() {
  const targetUrl =
    "https://api.whatsapp.com/send/?phone=543563415379&text=Hola!+Mi+nombre+es+______+Vi+este+anuncio%2C+quiero+un+usuario+por+favor!+gracias.&type=phone_number&app_absent=0"

  return (
    <Button
      onClick={() => (window.location.href = targetUrl)}
      className="relative text-lg bg-transparent font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 border-2 border-transparent hover:border-golden hover:shadow-golden group"
    >
      <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300 flex items-center gap-2">
        Quiero crear mi usuario
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/whatsapp.511x512-UFgewbT2m2KaQJ0vbFGSFM3iDMss1D.png"
          alt="WhatsApp"
          width={24}
          height={24}
          className="inline-block"
        />
      </span>
      <span className="absolute inset-0 bg-custom-bubble rounded-full transition-opacity duration-300 group-hover:opacity-0"></span>
    </Button>
  )
}

