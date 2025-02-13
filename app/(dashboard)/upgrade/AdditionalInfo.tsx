import type React from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { countries } from "countries-list"

interface AdditionalInfoProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formData: any
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  handleDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({ formData, handleChange, handleDateChange }) => {
  const countryOptions = Object.entries(countries).map(([code, country]) => ({
    value: code,
    label: country.name,
  }))

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="nationality">Nationality</Label>
        <Select
          value={formData.nationality}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onValueChange={(value) => handleChange({ target: { name: "nationality", value } } as any)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select your nationality" />
          </SelectTrigger>
          <SelectContent>
            {countryOptions.map((country) => (
              <SelectItem key={country.value} value={country.value}>
                {country.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="profession">Profession</Label>
        <Input
          type="text"
          name="profession"
          id="profession"
          placeholder="Enter your profession"
          value={formData.profession}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="dateOfBirth">Date of Birth</Label>
        <Input
          type="date"
          name="dateOfBirth"
          id="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleDateChange}
        />
      </div>
    </div>
  )
}

export default AdditionalInfo

