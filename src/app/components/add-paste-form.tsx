"use client";

import React, { useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/language-context';
import { Textarea } from '@/components/ui/textarea';

export function AddPasteForm() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState<string | null>(null);
    const [fileContent, setFileContent] = useState<string>("");
    const { toast } = useToast();
    const { dictionary } = useLanguage();

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type === 'text/plain') {
            const reader = new FileReader();
            reader.onload = (e) => {
                setFileName(file.name);
                setFileContent(e.target?.result as string);
            };
            reader.readAsText(file);
        } else {
            setFileName(null);
            setFileContent("");
            toast({
                title: dictionary.modules.uploadError.title,
                description: dictionary.modules.uploadError.description,
                variant: "destructive",
            });
        }
    };

    const triggerFileUpload = () => {
        fileInputRef.current?.click();
    };

    const handleSubmit = () => {
        // Here you would typically handle the form submission,
        // for example, by sending the data to a server.
        toast({
            title: "Paste Submitted",
            description: `${fileName} has been successfully submitted.`,
        });
        // Reset state after submission
        setFileName(null);
        setFileContent("");
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">{dictionary.addPaste.title}</CardTitle>
                <CardDescription>{dictionary.addPaste.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".txt"
                    className="hidden"
                />

                {!fileName ? (
                     <div className="flex flex-col items-center justify-center gap-4 text-center text-muted-foreground p-8 border border-dashed rounded-lg">
                        <Upload className="h-12 w-12" />
                        <h3 className="text-lg font-semibold">{dictionary.addPaste.upload.title}</h3>
                        <p className="text-sm">{dictionary.addPaste.upload.description}</p>
                        <Button onClick={triggerFileUpload} variant="outline">
                            <Upload className="mr-2 h-4 w-4" />
                            {dictionary.modules.uploadButton}
                        </Button>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="font-medium">
                            <span className="text-muted-foreground">Filename:</span> {fileName}
                        </div>
                        <Textarea 
                            value={fileContent} 
                            readOnly 
                            className="min-h-[200px] bg-secondary/30"
                        />
                         <div className="flex justify-end gap-2">
                             <Button variant="outline" onClick={() => { setFileName(null); setFileContent(""); }}>{dictionary.addPaste.cancelButton}</Button>
                            <Button onClick={handleSubmit}>
                                {dictionary.addPaste.submitButton}
                            </Button>
                         </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
