
"use client";

import { useState, useRef } from "react";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

export function ProfileSettings() {
  const [pin, setPin] = useState("");
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-headline">Profile Settings</CardTitle>
        <CardDescription>
          Manage your account settings, PIN, and profile picture.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex flex-col items-center gap-4">
          <Avatar
            className="h-24 w-24 cursor-pointer border-2 border-primary"
            onClick={handleAvatarClick}
          >
            <AvatarImage src={profileImage || ""} alt="Profile Picture" />
            <AvatarFallback>
              <User className="h-12 w-12" />
            </AvatarFallback>
          </Avatar>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            accept="image/*"
            className="hidden"
          />
          <Button variant="outline" onClick={handleAvatarClick}>
            Change Picture
          </Button>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="pin">PIN</Label>
          <Input
            id="pin"
            type="password"
            placeholder="Enter your PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            maxLength={4}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Save Changes</Button>
      </CardFooter>
    </Card>
  );
}

