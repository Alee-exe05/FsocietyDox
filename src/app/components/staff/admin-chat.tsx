
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PinInput } from './pin-input';
import { ShieldAlert, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

const ADMIN_PIN = "fsociety";

const messages = [
    { user: 'Whiterose', text: 'Stage 2 is proceeding as planned. Are there any obstacles?', time: '4:10 PM', avatar: 'W' },
    { user: 'Mr. Robot', text: 'None. Alderson is handling the final piece.', time: '4:12 PM', avatar: 'MR' },
    { user: 'Elliot', text: 'The firmware is almost ready.', time: '4:13 PM', avatar: 'E' },
    { user: 'Whiterose', text: 'Failure is not an option. Remember what is at stake.', time: '4:15 PM', avatar: 'W' },
];

export function AdminChat() {
    const { dictionary } = useLanguage();
    const [isUnlocked, setIsUnlocked] = useState(false);

    const handlePinSuccess = () => {
        setIsUnlocked(true);
    };

    return (
        <Card className="h-full flex flex-col">
            <CardHeader>
                <CardTitle>Admin Chat</CardTitle>
                <CardDescription>Top-level strategic communication.</CardDescription>
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
                                {messages.map((msg, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <Avatar>
                                            <AvatarFallback>{msg.avatar}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <span className="font-bold text-red-400">{msg.user}</span>
                                                <span className="text-xs text-muted-foreground">{msg.time}</span>
                                            </div>
                                            <p className="text-sm">{msg.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                        <div className="p-4 border-t">
                            <input
                                className="w-full bg-input px-3 py-2 rounded-md text-sm placeholder:text-muted-foreground"
                                placeholder="Type a message..."
                            />
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
