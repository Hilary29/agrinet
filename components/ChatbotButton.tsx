"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X, MessageSquareCode, MessageSquare } from "lucide-react"

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [particles, setParticles] = useState<Array<{ id: number; style: React.CSSProperties }>>([])

  const toggleChat = () => setIsOpen(!isOpen)

  useEffect(() => {
    if (!isOpen) {
      const interval = setInterval(() => {
        setParticles((currentParticles) => {
          const newParticle = {
            id: Date.now(),
            style: {
              left: `${Math.random() * 60 - 30}px`,
              top: `${Math.random() * 60 - 30}px`,
              animationDuration: `${Math.random() * 2 + 1}s`,
              animationDelay: `${Math.random() * 2}s`,
            },
          }
          return [...currentParticles.slice(-20), newParticle]
        })
      }, 200)

      return () => clearInterval(interval)
    }
  }, [isOpen])

  return (
    <>
      <div className="fixed bottom-8 right-[15%] md:right-[5%] z-50">
        {isOpen ? (
          <div className="bg-white-50 rounded-lg shadow-lg w-80 h-96 p-4">
            <button onClick={toggleChat} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
            <div className="h-full flex flex-col">
              <h2 className="text-lg font-semibold mb-4">Agrinet Chat bot</h2>
              <div className="flex-grow bg-gray-100 rounded p-2">{/* Messages du chat */}</div>
              <input type="text" placeholder="Tapez votre message..." className="mt-4 w-full p-2 border rounded" />
            </div>
          </div>
        ) : (
          <div className="relative">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute w-1 h-1 m-6 bg-violet-400 rounded-full opacity-75 sparkle"
                style={particle.style}
              />
            ))}
            <button
              onClick={toggleChat}
              className="bg-accent-500 hover:bg-accent-600 text-white-50 rounded-[10px] md:rounded-[16px] p-1.5 md:p-3 shadow-lg transition-colors duration-200 relative z-10"
            >
              <MessageSquare size={24} />
            </button>
          </div>
        )}
      </div>
      <style jsx>{`
        @keyframes sparkle {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: scale(1) rotate(180deg);
            opacity: 0.75;
          }
          100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
          }
        }

        .sparkle {
          animation: sparkle linear infinite;
        }
      `}</style>
    </>
  )
}

export default ChatbotButton

