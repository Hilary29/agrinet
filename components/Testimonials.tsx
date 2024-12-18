import Image from 'next/image'
import { FaQuoteRight } from 'react-icons/fa'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const testimonials = [
  {
    quote: "Before AgriNet, I struggled to keep track of my crops and find buyers for my produce. Now, I can monitor my farm's health in real time and receive recommendations tailored to my needs. The marketplace feature has been a game-changer, letting me sell directly to buyers and earn better prices without relying on middlemen. Agrinet has truly simplified farming for me.",
    name: "Assamba Melono Medard",
    role: "Farmer from Cameroon",
    image: "/images/testimonial2.png"
  },
  {
    quote: "Agrinet's real-time data insights have revolutionized how we approach agricultural policy. The ability to analyze trends, monitor farming activities, and ensure sustainability has been invaluable in our efforts to support farmers and improve food security. The platform provides the tools we need to drive impactful change in agriculture.",
    name: "Ousmanou Oumarou Yaya",
    role: "Agricultural Researcher",
    image: "/images/testimonial1.png"
  },
  {
    quote: "Agrinet has completely changed how I buy food. I love knowing exactly where my produce comes from, thanks to the product traceability feature. It's reassuring to see the journey from farm to table. Plus, being able to support local farmers directly is a bonus—it feels good to know I'm contributing to sustainable farming practices.",
    name: "Ngono Larissa Gaëlle",
    role: "Consumer",
    image: "/images/testimonial3.png"
  }
]

export default function TestimonialsSection() {
  return (
    <section className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1183px] mx-auto">
      <div className="text-center  mb-16">
        <p className=" text-accent-500 font-semibold text-paragraph-md p-2.5 mb-2.5">
          TESTIMONIALS
        </p>
        <p className="text-3xl  md:text-3xl lg:text-4xl font-semibold font-satoshi text-heading-desktop-h2 text-black-100 mb-4 sm:mb-5 md:mb-6 ">
        Trusted by Farmers, Institutions, and Communities
        </p>
        <p className=" font-regular font-inter text-paragraph-md text-black-400 justify-center px-2.5  mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">
        Real stories from people using Agrinet to transform the way they farm, buy, and innovate.
        </p>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-8 flex flex-col justify-between">
              <div>
                <FaQuoteRight className="text-primary-600 w-12 h-12 mb-6 transform rotate-180" />
                <p className="text-gray-600 mb-6">{testimonial.quote}</p>
              </div>
              <div className="flex items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 space-x-4">
          <button className="p-2 rounded-full bg-primary-50 text-primary-600 hover:bg-primary-100 transition-colors duration-200">
            <BsChevronLeft className="w-6 h-6" />
          </button>
          <button className="p-2 rounded-full bg-primary-50 text-primary-600 hover:bg-primary-100 transition-colors duration-200">
            <BsChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

