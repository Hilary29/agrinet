"use client";
import IntroText from "@/components/IntroText";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CreditCard, Banknote, Smartphone } from "lucide-react";

type PaymentOption = "card" | "bank_transfer" | "mobile" | null;

export default function PaymentPage() {
  const [selectedOption, setSelectedOption] = useState<PaymentOption>(null);

  const renderForm = () => {
    switch (selectedOption) {
      case "card":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Label htmlFor="card-number">Card Number</Label>
                <Input id="card-number" placeholder="1234 5678 9012 3456" />
              </div>
              <div>
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input id="expiry" placeholder="MM/YY" />
              </div>
              <div>
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="123" />
              </div>
            </div>
            <Button className="w-full">Pay with Card</Button>
          </div>
        );
      case "bank_transfer":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="iban">IBAN</Label>
              <Input id="iban" placeholder="GB29 NWBK 6016 1331 9268 19" />
            </div>
            <div>
              <Label htmlFor="bic">BIC/SWIFT</Label>
              <Input id="bic" placeholder="NWBKGB2L" />
            </div>
            <Button className="w-full">Confirm Bank Transfer</Button>
          </div>
        );
      case "mobile":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="phone-number">Phone Number</Label>
              <Input id="phone-number" placeholder="+44 7911 123456" />
            </div>
            <div>
              <Label htmlFor="mobile-provider">Mobile Payment Provider</Label>
              <Input
                id="mobile-provider"
                placeholder="e.g. Apple Pay, Google Pay"
              />
            </div>
            <Button className="w-full">Pay with Mobile</Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <IntroText title="Checkout" description="Choose your Payment method" />
      <div className=" flex items-center justify-center ">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Payment</CardTitle>
            <CardDescription>Choose your payment method</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup
              onValueChange={(value) =>
                setSelectedOption(value as PaymentOption)
              }
              className="grid grid-cols-3 gap-4 mb-4"
            >
              <div>
                <RadioGroupItem
                  value="card"
                  id="card"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="card"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <CreditCard className="mb-3 h-6 w-6" />
                  Credit Card
                </Label>
              </div>
              <div>
                <RadioGroupItem
                  value="bank_transfer"
                  id="bank_transfer"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="bank_transfer"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <Banknote className="mb-3 h-6 w-6" />
                  Bank Transfer
                </Label>
              </div>
              <div>
                <RadioGroupItem
                  value="mobile"
                  id="mobile"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="mobile"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <Smartphone className="mb-3 h-6 w-6" />
                  Mobile Payment
                </Label>
              </div>
            </RadioGroup>
            {renderForm()}
          </CardContent>
          <CardFooter className="flex justify-between">
            {selectedOption && (
              <Button variant="outline" onClick={() => setSelectedOption(null)}>
                Back
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
