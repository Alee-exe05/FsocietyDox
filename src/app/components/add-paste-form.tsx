"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/language-context';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

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
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">{dictionary.addPaste.title}</CardTitle>
                <CardDescription>{dictionary.addPaste.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input 
                        id="title" 
                        placeholder="Enter a title for your paste"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="content">Content</Label>
                    <Textarea 
                        id="content"
                        placeholder="Write your paste content here..."
                        value={content} 
                        onChange={(e) => setContent(e.target.value)}
                        className="min-h-[300px] font-mono"
                    />
                </div>
                 <div className="flex justify-end gap-2">
                    <Button onClick={handleSubmit}>
                        {dictionary.addPaste.submitButton}
                    </Button>
                 </div>
            </CardContent>
        </Card>
    );
}
