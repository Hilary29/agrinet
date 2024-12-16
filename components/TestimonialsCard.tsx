import Image from 'next/image'
import { FaQuoteRight } from 'react-icons/fa'

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  imageUrl: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role, imageUrl }) => {
  return (
    <div className="flex flex-col items-start p-6 gap-9 w-full max-w-md bg-[#F2F2F2] rounded-xl">
      <div className="flex flex-col items-start gap-9 w-full">
        <FaQuoteRight className="w-12 h-12 text-[#2FB551] transform rotate-180" />
        
        <p className="text-base leading-6 text-[#4B4B4B]">
          {quote}
        </p>
        
        <div className="flex items-center gap-4">
          <Image
            src={imageUrl}
            alt={name}
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="flex flex-col gap-1.5">
            <p className="text-base leading-6 text-black">{name}</p>
            <p className="text-base leading-6 text-[#4B4B4B]">{role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard

