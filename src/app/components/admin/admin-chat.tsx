
"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send, MessageCircle } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { users, User } from '@/lib/data/users';
import { cn } from '@/lib/utils';

interface Message {
    id: number;
    user: User | undefined;
    text: string;
    time: string;
}

export function AdminChat() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    const adminMembers = useMemo(() => users.filter(u => u.role === 'Admin' || u.role === 'CEO'), []);
    const currentUser = useMemo(() => adminMembers.find(u => u.name === 'Elliot Alderson'), [adminMembers]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (newMessage.trim() && currentUser) {
            const message: Message = {
                id: messages.length + 1,
                user: currentUser,
                text: newMessage,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages([...messages, message]);
            setNewMessage('');
        }
    }

     useEffect(() => {
        // Auto-scroll to the bottom
        if (scrollAreaRef.current) {
            const scrollableView = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
            if (scrollableView) {
                scrollableView.scrollTop = scrollableView.scrollHeight;
            }
        }
    }, [messages]);


    return (
        <Card className="h-full flex flex-col">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline">
                    <MessageCircle />
                    Admin Chat
                </CardTitle>
                <CardDescription>Private communication for Admins and CEO.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col gap-4 overflow-hidden">
                <ScrollArea className="flex-1 pr-4" ref={scrollAreaRef}>
                    <div className="space-y-4">
                        {messages.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full text-muted-foreground text-center p-8">
                                <MessageCircle className="w-12 h-12 mb-4" />
                                <h3 className="font-semibold">Admin chat is empty</h3>
                                <p className="text-sm">Send a message to start a private conversation.</p>
                            </div>
                        ) : (
                            messages.map((msg) => (
                            <div key={msg.id} className={cn("flex items-end gap-2", msg.user?.id === currentUser?.id ? "justify-end" : "justify-start")}>
                                {msg.user?.id !== currentUser?.id && (
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={msg.user?.avatar} />
                                        <AvatarFallback>{msg.user?.name.substring(0, 2)}</AvatarFallback>
                                    </Avatar>
                                )}
                                <div className={cn("max-w-xs md:max-w-md lg:max-w-lg rounded-lg px-3 py-2",
                                    msg.user?.id === currentUser?.id ? "bg-primary text-primary-foreground" : "bg-muted"
                                )}>
                                    <p className="text-sm">{msg.text}</p>
                                    <p className={cn("text-xs mt-1", msg.user?.id === currentUser?.id ? "text-primary-foreground/70" : "text-muted-foreground")}>{msg.time}</p>
                                </div>
                                {msg.user?.id === currentUser?.id && (
                                     <Avatar className="h-8 w-8">
                                        <AvatarImage src={msg.user?.avatar} />
                                        <AvatarFallback>{msg.user?.name.substring(0, 2)}</AvatarFallback>
                                    </Avatar>
                                )}
                            </div>
                        )))}
                    </div>
                </ScrollArea>
                <form onSubmit={handleSendMessage} className="flex w-full items-center space-x-2">
                    <Input
                        type="text"
                        placeholder="Type a private message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="flex-1"
                        autoComplete="off"
                    />
                    <Button type="submit" size="icon">
                        <Send className="h-4 w-4" />
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
