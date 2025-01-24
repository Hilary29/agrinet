"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const Page = () => {
  const { signUpWithEmail, loginWithGoogle } = useAuth();
  const router = useRouter();
  
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      await signUpWithEmail(email, password, name);
      router.push("/login");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await loginWithGoogle();
      router.push("/");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div>
      <Card className="mx-auto w-[25%] min-w-[350px] bg-[#ffffff] border-none rounded-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-secondary-500 mx-auto">Signup</CardTitle>
          <CardDescription>
            {error && <p className="text-red-500">{error}</p>}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup}>
            <div className="grid gap-4 font-regular text-paragraph-md font-inter">
              <div className="grid gap-2">
                <Label htmlFor="name" className="font-regular text-paragraph-md font-inter text-black-300">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Hilary Aud"
                  className="bg-white-50"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="font-regular text-paragraph-md font-inter text-black-300">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  className="bg-white-50"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password" className="font-regular text-paragraph-md font-inter text-black-300">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  className="bg-white-50"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div className="grid gap-2">
                <Button
                  type="submit"
                  className="w-full font-semibold text-white-50 font-inter hover:bg-primary-800 bg-primary-700"
                >
                  Signup
                </Button>
                <p className="text-center">or</p>
                <Button
                  onClick={handleGoogleSignup}
                  type="button"
                  variant="outline"
                  className="w-full font-semibold bg-white-50 text-black-300 hover:bg-white-100"
                >
                  <Image src="/images/google-icon.png" alt="Google Logo" width={32} height={32} /> Signup with Google
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm text-accent-600">
              Already have an account?{" "}
              <Link href="/login" className="underline">
                Log in
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;

