import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from '@vercel/analytics/next';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Luxury Bets",
  description: "Acceso exclusivo a experiencias de apuestas de lujo",
    generator: 'v0.dev'
}

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-4">
      <BackgroundImage />
      <div className="z-10 text-center">
        <RedirectButton />
      </div>
    </main>
  )
}


import './globals.css'
