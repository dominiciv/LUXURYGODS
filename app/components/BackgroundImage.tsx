export default function BackgroundImage() {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage:
          "url('https://imgur.com/a/nSX4DBG')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "black", // Fallback color
      }}
    />
  )
}
