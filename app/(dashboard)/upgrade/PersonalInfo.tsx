import type React from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface PersonalInfoProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formData: any
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ formData, handleChange }) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="businessActorName">Business Actor Name</Label>
        <Input
          type="text"
          name="businessActorName"
          id="businessActorName"
          placeholder="Enter business name"
          value={formData.businessActorName}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          type="text"
          name="email"
          id="email"
          placeholder="Enter your Email address"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phoneNumber">Phone Number</Label>
        <Input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="Enter your phone number"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label>Gender</Label>
        <RadioGroup
          value={formData.gender}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onValueChange={(value) => handleChange({ target: { name: "gender", value } } as any)}
          className="flex space-x-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="male" id="male" />
            <Label htmlFor="male">Male</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="female" id="female" />
            <Label htmlFor="female">Female</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

export default PersonalInfo

