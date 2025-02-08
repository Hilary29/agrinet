import type React from "react"
import Image from "next/image"

interface Farmer {
    id: number
    name: string
    specialty: string
    rating: number
    imageUrl: string
}

const farmers: Farmer[] = [
    {
        id: 1,
        name: "Ali Bouba",
        specialty: "Organic Vegetables",
        rating: 4.8,
        imageUrl: "/images/farmer1.jpeg",
    },
    {
        id: 2,
        name: "Zanga Marthe",
        specialty: "Sustainable Dairy",
        rating: 4.7,
        imageUrl: "/images/farmer2.jpeg",
    },
    {
        id: 3,
        name: "Manga Onana Agnes",
        specialty: "Ground expert",
        rating: 4.9,
        imageUrl: "/images/farmer3.jpeg",
    },
    {
        id: 4,
        name: "Pierre Atangana",
        specialty: "Big enterprises supply",
        rating: 4.6,
        imageUrl: "/images/farmer4.avif",
    },
]

const FarmerCard: React.FC<{ farmer: Farmer }> = ({ farmer }) => {
    return (
        <div className="flex flex-col items-center rounded-md bg-white p-0.5 shadow-6dp transition-transform hover:scale-105">
            <div className="relative h-40 w-full overflow-hidden rounded-md mb-4">
                <Image
                    src={farmer.imageUrl || "/placeholder.svg"}
                    alt={farmer.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <p className="font-inter text-lg font-semibold text-gray-800 mb-1">{farmer.name}</p>
            <p className="font-inter text-sm text-gray-600 mb-2">{farmer.specialty}</p>
            {/*             <div className="flex items-center">
                <span className="text-yellow-400 mr-1">★</span>
                <span className="font-inter text-sm font-medium text-gray-700">{farmer.rating.toFixed(1)}</span>
            </div> */}
        </div>
    )
}

const FarmerRecommendations: React.FC = () => {
    return (
        <section className="w-full px-4 py-12 sm:px-6 lg:px-8 bg-white-50">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col text-center w-full mb-16">
                    <p className="text-accent-500 font-semibold text-sm mb-4">RECOMMANDATIONS</p>
                    <p className="text-3xl md:text-4xl font-semibold font-satoshi text-gray-900 mb-4">
                        Discover our exceptional farmers
                    </p>
                    <p className="font-inter text-base text-gray-600 max-w-2xl mx-auto">
                        Connect with passionate farmers who share our vision of sustainable agriculture and
                        innovative.

                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {farmers.map((farmer) => (
                        <FarmerCard key={farmer.id} farmer={farmer} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FarmerRecommendations

