import type React from "react"
import Image from "next/image"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface PaymentAndDescriptionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formData: any
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  handlePaymentMethodToggle: (method: string) => void
}

const PaymentAndDescription: React.FC<PaymentAndDescriptionProps> = ({
  formData,
  handleChange,
  handlePaymentMethodToggle,
}) => {
  const paymentMethodsOptions = [
    { value: "Bank Card", label: "Bank Card", icon: "/images/credit-card.png" },
    { value: "Paypal", label: "Paypal", icon: "/images/paypal-transparent.png" },
    { value: "Orange Money", label: "Orange Money", icon: "/images/orange-money.png" },
    { value: "Mobile Money", label: "Mobile Money", icon: "/images/mobile--money.png" },
    { value: "Cash", label: "Cash", icon: "/images/salary.png" },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Label>Payment Methods</Label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {paymentMethodsOptions.map((method) => (
            <div
              key={method.value}
              onClick={() => handlePaymentMethodToggle(method.value)}
              className={`flex items-center p-4 rounded-lg border transition-colors cursor-pointer hover:bg-accent ${
                formData.paymentMethods.includes(method.value)
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary"
              }`}
            >
              <Image
                src={method.icon || "/placeholder.svg"}
                alt={method.label}
                width={32}
                height={32}
                className="mr-3"
              />
              <span className="font-medium">{method.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          name="description"
          id="description"
          placeholder="Tell us about your business..."
          className="min-h-[100px]"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default PaymentAndDescription

