import Image from "next/image"

interface UserInfoProps {
  imageUrl: string
  name: string
  username: string
}

export default function UserInfo({ imageUrl, name, username }: UserInfoProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-16 pb-8 bg-white-50">
      <div className="relative w-16 h-16 sm:w-16 sm:h-16">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={`Profile picture of ${name}`}
          fill
          className="rounded-full object-cover"
        />
      </div>
      <div className="text-center sm:text-left pt-2">
        <p className="font-semibold text-black-50 text-paragraph-lg sm:text-base">{name}</p>
        <p className="text-sm text-gray-600">@{username}</p>
      </div>
    </div>
  )
}

