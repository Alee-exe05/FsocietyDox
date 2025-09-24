
"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


export function StaffChat() {
    return (
        <Card className="h-full flex flex-col">
            <CardHeader>
                <CardTitle>Staff Chat</CardTitle>
                <CardDescription>General communication channel.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col p-0">
                <ScrollArea className="flex-1 p-4">
                    <div className="space-y-4">
                        
                    </div>
                </ScrollArea>
                <div className="p-4 border-t">
                    <input 
                        className="w-full bg-input px-3 py-2 rounded-md text-sm placeholder:text-muted-foreground" 
                        placeholder="Type a message..."
                    />
                </div>
            </CardContent>
        </Card>
    );
}
