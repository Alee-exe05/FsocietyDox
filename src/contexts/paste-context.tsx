
"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Module } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from './language-context';
import { useCollection, useUser, useFirestore } from '@/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

interface Stats {
    totalModules: number;
    moderated: number;
    flagged: number;
}

interface PasteContextType {
    modules: Module[];
    stats: Stats;
    addPaste: (title: string, content: string) => Promise<void>;
    incrementModerated: () => void;
    incrementFlagged: () => void;
}

const PasteContext = createContext<PasteContextType | undefined>(undefined);

export function PasteProvider({ children }: { children: ReactNode }) {
    const { user } = useUser();
    const firestore = useFirestore();

    // Use a path that includes the user's ID for user-specific pastes,
    // or a general path for public pastes.
    // For this app, let's assume public pastes for all authenticated users.
    const pastesCollection = firestore ? collection(firestore, 'pastes') : null;
    const { data: modules = [], loading: modulesLoading } = useCollection<Module>(pastesCollection);

    const [stats, setStats] = useState<Stats>({
        totalModules: 0,
        moderated: 0,
        flagged: 0,
    });
    const { toast } = useToast();
    const { dictionary } = useLanguage();

    useEffect(() => {
        setStats(prev => ({ ...prev, totalModules: modules.length }));
    }, [modules]);

    const addPaste = async (title: string, content: string) => {
        if (!user || !firestore) {
             toast({
                title: "Authentication Error",
                description: "You must be logged in to add a paste.",
                variant: "destructive",
            });
            return;
        }

        if (!title.trim() || !content.trim()) {
            toast({
                title: "Submission Failed",
                description: "Title and content cannot be empty.",
                variant: "destructive",
            });
            return;
        }

        try {
            if (!pastesCollection) throw new Error("Firestore not initialized");
            
            await addDoc(pastesCollection, {
                filename: title,
                content: content,
                uploader: {
                    uid: user.uid,
                    name: user.displayName || 'Anonymous',
                    role: 'Member' // In a real app, you'd get this from custom claims or a user profile doc
                },
                createdAt: serverTimestamp(),
                uploadDate: new Date().toLocaleDateString(), // Keep this for display simplicity
            });

            toast({
                title: dictionary.modules.uploadSuccess.title,
                description: `"${title}" ${dictionary.modules.uploadSuccess.description}`,
            });

        } catch (error) {
            console.error("Error adding document: ", error);
            toast({
                title: "Error",
                description: "Failed to save paste to the database.",
                variant: "destructive",
            });
        }
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
        <PasteContext.Provider value={{ modules: modules as Module[], stats, addPaste, incrementModerated, incrementFlagged }}>
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
