
"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { RefreshCw } from 'lucide-react';

interface PinGeneratorProps {
    title: string;
    description: string;
    onSuccess: () => void;
}

const generatePin = (length: number): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};

export function PinGenerator({ title, description, onSuccess }: PinGeneratorProps) {
    const [generatedPin, setGeneratedPin] = useState('');
    const [userInput, setUserInput] = useState('');
    const { toast } = useToast();

    useEffect(() => {
        setGeneratedPin(generatePin(8));
    }, []);

    const handleRegenerate = () => {
        setGeneratedPin(generatePin(8));
        setUserInput('');
    };

    const handleVerify = () => {
        if (userInput === generatedPin) {
            onSuccess();
        } else {
            toast({
                title: "Access Denied",
                description: "The PIN entered is incorrect.",
                variant: "destructive",
            });
            setUserInput('');
            setGeneratedPin(generatePin(8));
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleVerify();
        }
    };

    const pinDisplay = useMemo(() => (
        <div className="flex justify-center items-center gap-1 bg-muted p-3 rounded-md select-none" aria-label="Generated PIN">
            {generatedPin.split('').map((char, index) => (
                <span key={index} className="font-mono text-xl font-bold text-foreground tracking-widest inline-block">
                    {char}
                </span>
            ))}
        </div>
    ), [generatedPin]);

    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    {pinDisplay}
                    <div className="flex justify-end">
                        <Button variant="ghost" size="sm" onClick={handleRegenerate}>
                            <RefreshCw className="mr-2 h-4 w-4" />
                            Regenerate
                        </Button>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Input
                        type="text"
                        placeholder="Enter the PIN above"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="font-mono"
                        autoComplete="off"
                        onPaste={(e) => e.preventDefault()}
                    />
                    <Button onClick={handleVerify}>Verify</Button>
                </div>
            </CardContent>
        </Card>
    );
}
