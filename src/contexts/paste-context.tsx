
"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Module, Uploader } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from './language-context';

interface Stats {
    totalModules: number;
    moderated: number;
    flagged: number;
}

interface PasteContextType {
    modules: Module[];
    stats: Stats;
    addPaste: (title: string, content: string) => void;
    incrementModerated: () => void;
    incrementFlagged: () => void;
}

const PasteContext = createContext<PasteContextType | undefined>(undefined);

// Dummy user for submissions, since we removed authentication
const dummyUploader: Uploader = {
    name: 'Elliot Alderson',
    role: 'Member'
};

export function PasteProvider({ children }: { children: ReactNode }) {
    const [modules, setModules] = useState<Module[]>([]);
    const [stats, setStats] = useState<Stats>({
        totalModules: 0,
        moderated: 0,
        flagged: 0,
    });
    const { toast } = useToast();
    const { dictionary } = useLanguage();

    const addPaste = (title: string, content: string) => {
        if (!title.trim() || !content.trim()) {
            toast({
                title: "Submission Failed",
                description: "Title and content cannot be empty.",
                variant: "destructive",
            });
            return;
        }

        const newModule: Module = {
            id: new Date().toISOString(),
            filename: title,
            uploadDate: new Date().toLocaleDateString(),
            content: content,
            uploader: dummyUploader
        };

        setModules(prevModules => [newModule, ...prevModules]);
        setStats(prevStats => ({
            ...prevStats,
            totalModules: prevStats.totalModules + 1
        }));

        toast({
            title: dictionary.modules.uploadSuccess.title,
            description: `"${title}" ${dictionary.modules.uploadSuccess.description}`,
        });
    };

    const incrementModerated = () => {
        setStats(prevStats => ({
            ...prevStats,
            moderated: prevStats.moderated + 1
        }));
    };
    
    const incrementFlagged = () => {
        setStats(prevStats => ({
            ...prevStats,
            flagged: prevStats.flagged + 1
        }));
    };

    return (
        <PasteContext.Provider value={{ modules, stats, addPaste, incrementModerated, incrementFlagged }}>
            {children}
        </PasteContext.Provider>
    );
}

export function usePaste() {
    const context = useContext(PasteContext);
    if (context === undefined) {
        throw new Error('usePaste must be used within a PasteProvider');
    }
    return context;
}
