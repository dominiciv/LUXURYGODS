"use client"

const comments = [
  {
    name: "Carlos",
    message: "Cargué y gané 550.000 pesos",
    emoji: "🎰",
    time: "Hace 2 min",
  },
  {
    name: "Maria",
    message: "La mejor plataforma para apostar!",
    emoji: "⭐",
    time: "Hace 5 min",
  },
  {
    name: "José",
    message: "Muy buena atención de las cajeras, las amo!",
    emoji: "👑",
    time: "Hace 8 min",
  },
]

function Comment({ name, message, emoji, time }: (typeof comments)[0]) {
  return (
    <div className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-3 w-[280px] shrink-0 mx-4">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-golden to-amber-300 flex items-center justify-center text-lg shrink-0">
        {emoji}
      </div>
      <div className="w-full text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="font-semibold text-white">{name}</span>
          <span className="text-xs text-gray-400">{time}</span>
        </div>
        <p className="text-sm text-gray-200 mt-1">{message}</p>
      </div>
    </div>
  )
}

export default function MarqueeComments() {
  return (
    <div className="w-[320px] overflow-hidden">
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee-slow flex items-center py-2 translate-x-[-50%]">
          {comments.map((comment, i) => (
            <Comment key={`a-${i}`} {...comment} />
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2-slow flex items-center py-2 translate-x-[-50%]">
          {comments.map((comment, i) => (
            <Comment key={`b-${i}`} {...comment} />
          ))}
        </div>
      </div>
    </div>
  )
}

