
"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { usePaste } from '@/contexts/paste-context';

const FsocietyAsciiArt = () => (
    <pre className="text-xs text-white font-mono whitespace-pre-wrap break-words animate-glitter">
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
    const { dictionary } = useLanguage();
    const { addPaste } = usePaste();

    const handleSubmit = async () => {
        await addPaste(title, content);
        // Reset state after submission if addPaste doesn't throw
        setTitle('');
        setContent('');
    };

    return (
        <div className="h-full flex flex-col p-4 md:p-6 space-y-6 bg-card">
            <div className="text-center py-4">
                <FsocietyAsciiArt />
            </div>
            
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
