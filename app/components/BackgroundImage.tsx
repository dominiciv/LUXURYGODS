export default function BackgroundImage() {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage:
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pagina_1920x1080-T3TOfBfZZFcRdXkauNWodQ28Yxag5b.png')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "black", // Fallback color
      }}
    />
  )
}

