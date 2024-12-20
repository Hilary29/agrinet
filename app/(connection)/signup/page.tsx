import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from 'next/link'

const page = () => {
  
  return (
    <div >
      
      <Card className="mx-auto w-[25%] min-w-[350px] bg-[#ffffff17] border-none rounded-sm">
      <CardHeader>
        <CardTitle className="text-2xl text-white-50 mx-auto">Signup</CardTitle>
        <CardDescription>
          {/* Enter your email below to login to your account */}
        </CardDescription> 
      </CardHeader>
      <CardContent>
        <div className="grid gap-8 font-regular text-paragraph-md font-inter">
          <div className="grid gap-2">
            <Label htmlFor="email" className="font-regular text-paragraph-md font-inter text-black-600">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password" className="font-regular text-paragraph-md font-inter text-black-600">
                Password
              </Label>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full font-semibold font-inter hover:bg-primary-700 bg-primary-800">
            Signup
          </Button>
          <Button variant="outline" className="w-full">
            Signup with Google
          </Button> 
        </div>
       <div className="mt-4 text-center text-sm text-accent-600">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Sign in
          </Link>
        </div> 
      </CardContent>
    </Card>
    </div>
  )
}

export default page
