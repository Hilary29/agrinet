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
      <Card className="mx-auto w-[25%] min-w-[350px] bg-white-50 border-none rounded-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-secondary-500 mx-auto">
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
                className="font-regular text-paragraph-md font-inter bg-white-50 text-black-300"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="bg-white-50"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label
                  htmlFor="password"
                  className="font-regular text-paragraph-md font-inter text-black-300"
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
              <Input
                id="password"
                type="password"
                required
                className="bg-white-50"
              />
            </div>
            <div className="grid gap-2">
              <Button
                type="submit"
                className="w-full font-semibold text-white-50 font-inter hover:bg-primary-800 bg-primary-700"
              >
                Login
              </Button>
              <p className="text-center">or</p>
              <Button
                variant="outline"
                className="w-full font-semibold bg-white-50 text-black-300 hover:bg-white-100"
              >
                <Image
                  src="/images/google-icon.png"
                  alt="Google Logo"
                  width={32}
                  height={32}
                />{" "}
                Login with Google
              </Button>
            </div>
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
