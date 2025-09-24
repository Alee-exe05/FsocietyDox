
"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface PinInputProps {
    title: string;
    description: string;
    correctPin: string;
    onSuccess: () => void;
    children?: React.ReactNode;
}

export function PinInput({ title, description, correctPin, onSuccess, children }: PinInputProps) {
    const [pin, setPin] = useState('');
    const { toast } = useToast();

    const handleVerify = () => {
        if (pin === correctPin) {
            onSuccess();
        } else {
            toast({
                title: "Access Denied",
                description: "The PIN entered is incorrect.",
                variant: "destructive",
            });
            setPin('');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleVerify();
        }
    };

    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex gap-2">
                    <Input
                        type="password"
                        placeholder="Enter PIN"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <Button onClick={handleVerify}>Verify</Button>
                </div>
                {children}
            </CardContent>
        </Card>
    );
}
