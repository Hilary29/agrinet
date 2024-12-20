import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";


const page = () => {
  return (
    <div>


      <Card className="mx-auto w-[25%] min-w-[350px] bg-[#ffffff17] border-none rounded-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-white-50 mx-auto">
            Login
          </CardTitle>
          <CardDescription>
            {/* Enter your email below to login to your account */}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8 font-regular text-paragraph-md font-inter">
            <div className="grid gap-2">
              <Label
                htmlFor="email"
                className="font-regular text-paragraph-md font-inter text-black-600"
              >
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
                <Label
                  htmlFor="password"
                  className="font-regular text-paragraph-md font-inter text-black-600"
                >
                  Password
                </Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline text-accent-600"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button
              type="submit"
              className="w-full font-semibold font-inter hover:bg-primary-700 bg-primary-800"
            >
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm text-accent-600">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
