
"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useLanguage } from '@/contexts/language-context';


export function StaffChat() {
    const { dictionary } = useLanguage();
    return (
        <Card className="h-full flex flex-col">
            <CardHeader>
                <CardTitle>{dictionary.staff.staffChat.title}</CardTitle>
                <CardDescription>{dictionary.staff.staffChat.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col p-0">
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
            </CardContent>
        </Card>
    );
}
