
"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const messages = [
    { user: 'Darlene', text: 'Did you get the server specs?', time: '3:01 PM', avatar: 'D' },
    { user: 'Elliot', text: 'Yeah, I have them. Working on the exploit now.', time: '3:02 PM', avatar: 'E' },
    { user: 'Mr. Robot', text: 'Make it quick. We don\'t have much time.', time: '3:02 PM', avatar: 'MR' },
    { user: 'Darlene', text: 'I need access to the HVAC system logs.', time: '3:03 PM', avatar: 'D' },
    { user: 'Elliot', text: 'Should be in the shared directory. /logs/hvac_access.log', time: '3:04 PM', avatar: 'E' },
    { user: 'Trenton', text: 'I\'m running into a firewall issue on the secondary network.', time: '3:05 PM', avatar: 'T' },
    { user: 'Mobley', text: 'Try port 8080. It should be open.', time: '3:06 PM', avatar: 'M' },
];

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
                        {messages.map((msg, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <Avatar>
                                    <AvatarFallback>{msg.avatar}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold">{msg.user}</span>
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
            </CardContent>
        </Card>
    );
}
