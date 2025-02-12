import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface UpgradeCardProps {
  title?: string
  description?: string
  buttonText?: string
  onClick?: () => void
}

export default function UpgradeCard({
  title = "Agrinet Business",
  description = "Get access to all features on Agrinet",
  buttonText = "Become Agri-Business",
  onClick,
}: UpgradeCardProps) {
  return (
    <Card className="w-full mt-8 overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600">
      <CardContent className="p-2 flex flex-col items-center text-center space-y-4">
        <div className="space-y-1">
          <p className="text-xl font-semibold text-white-50">{title}</p>
          <p className="text-sm text-white-50/80">{description}</p>
        </div>

        <Button onClick={onClick} className="bg-white-50 hover:bg-white-50/90 text-emerald-700 font-medium">
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  )
}

