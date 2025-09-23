
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function RegisterForm() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-headline">Register</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" type="text" placeholder="fsociety" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col">
        <Button className="w-full">Create account</Button>
        <p className="mt-2 text-xs text-center text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
                Login
            </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
