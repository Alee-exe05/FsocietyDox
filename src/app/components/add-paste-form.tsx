
"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/language-context';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronsUpDown } from 'lucide-react';

const FsocietyAsciiArt = () => (
    <pre className="text-xs text-primary font-mono whitespace-pre-wrap break-words">
{`
   /$$$$$$$$                            /$$             /$$              
  | $$_____/                           |__/            | $$              
  | $$     /$$$$$$$  /$$$$$$   /$$$$$$$ /$$  /$$$$$$  /$$$$$$   /$$   /$$
  | $$$$$ /$$_____/ /$$__  $$ /$$_____/| $$ /$$__  $$|_  $$_/  | $$  | $$
  | $$__/|  $$$$$$ | $$  \ $$| $$      | $$| $$$$$$$$  | $$    | $$  | $$
  | $$    \____  $$| $$  | $$| $$      | $$| $$_____/  | $$ /$$| $$  | $$
  | $$    /$$$$$$$/|  $$$$$$/|  $$$$$$$| $$|  $$$$$$$  |  $$$$/|  $$$$$$$
  |__/   |_______/  \______/  \_______/|__/ \_______/   \___/   \____  $$
                                                                /$$  | $$
                                                               |  $$$$$$/
                                                                \______/ 
`}
    </pre>
);


export function AddPasteForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { toast } = useToast();
    const { dictionary } = useLanguage();

    const handleSubmit = () => {
        if (!title.trim() || !content.trim()) {
            toast({
                title: "Submission Failed",
                description: "Title and content cannot be empty.",
                variant: "destructive",
            });
            return;
        }
        
        toast({
            title: "Paste Submitted",
            description: `Your paste "${title}" has been successfully submitted.`,
        });
        
        // Reset state after submission
        setTitle('');
        setContent('');
    };

    return (
        <div className="h-full flex flex-col p-4 md:p-6 space-y-6 bg-card">
            <Collapsible>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-full justify-center">
                        <ChevronsUpDown className="h-4 w-4" />
                        <span className="sr-only">Toggle ASCII Art</span>
                    </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <div className="text-center py-4">
                        <FsocietyAsciiArt />
                    </div>
                </CollapsibleContent>
            </Collapsible>
            
            <div className="flex-1 flex flex-col space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="title" className="text-card-foreground">Title</Label>
                    <Input 
                        id="title" 
                        placeholder="Enter a title for your paste"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="space-y-2 flex-1 flex flex-col">
                    <Label htmlFor="content" className="text-card-foreground">Content</Label>
                    <Textarea 
                        id="content"
                        placeholder="Write your paste content here..."
                        value={content} 
                        onChange={(e) => setContent(e.target.value)}
                        className="flex-1 font-mono resize-none"
                    />
                </div>
                 <div className="flex justify-end gap-2">
                    <Button onClick={handleSubmit} variant="secondary">
                        {dictionary.addPaste.submitButton}
                    </Button>
                 </div>
            </div>
        </div>
    );
}
