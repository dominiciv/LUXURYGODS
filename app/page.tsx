import RedirectButton from "./components/RedirectButton"
import BackgroundImage from "./components/BackgroundImage"
import { Analytics } from "@vercel/analytics/react"

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

