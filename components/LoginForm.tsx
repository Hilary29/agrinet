/* import Link from "next/link" */

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

export function LoginForm() {
  return (
    <div >
      
      <Card className="mx-auto w-[30%] max-w-sm bg-[#ffffff26]">
      <CardHeader>
        <CardTitle className="text-2xl text-white-50 mx-auto">Authentification</CardTitle>
        <CardDescription>
          {/* Enter your email below to login to your account */}
        </CardDescription> 
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
{/*               <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link> */}
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full hover:bg-primary-700 bg-primary-800">
            Login
          </Button>
{/*           <Button variant="outline" className="w-full">
            Login with Google
          </Button> */}
        </div>
{/*         <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="#" className="underline">
            Sign up
          </Link>
        </div> */}
      </CardContent>
    </Card>
    </div>

  )
}
