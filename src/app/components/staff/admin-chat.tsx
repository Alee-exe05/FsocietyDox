
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useLanguage } from '@/contexts/language-context';
import { PinInput } from './pin-input';


const ADMIN_PIN = "fsociety-admin-access-!@#$";

export function AdminChat() {
    const { dictionary } = useLanguage();
    const [isUnlocked, setIsUnlocked] = useState(false);

    const handlePinSuccess = () => {
        setIsUnlocked(true);
    };

    return (
        <Card className="h-full flex flex-col">
            <CardHeader>
                <CardTitle>{dictionary.staff.adminChat.title}</CardTitle>
                <CardDescription>{dictionary.staff.adminChat.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-center items-center">
                {!isUnlocked ? (
                     <PinInput
                        title={dictionary.staff.adminPin.title}
                        description={dictionary.staff.adminPin.description}
                        correctPin={ADMIN_PIN}
                        onSuccess={handlePinSuccess}
                     />
                ) : (
                    <div className="w-full h-full flex flex-col p-0">
                         <ScrollArea className="flex-1 p-4">
                            <div className="space-y-4">
                                
                            </div>
                        </ScrollArea>
                        <div className="p-4 border-t">
                            <input
                                className="w-full bg-input px-3 py-2 rounded-md text-sm placeholder:text-muted-foreground"
                                placeholder={dictionary.staff.chat.placeholder}
                            />
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
