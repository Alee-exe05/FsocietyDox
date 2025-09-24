
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { auth, db } from '@/lib/firebase/config';
import { onAuthStateChanged, User as FirebaseAuthUser } from 'firebase/auth';
import { doc, getDoc, DocumentData } from 'firebase/firestore';
import { LoaderCircle } from 'lucide-react';

interface AuthContextType {
  user: FirebaseAuthUser | null;
  userProfile: DocumentData | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<FirebaseAuthUser | null>(null);
  const [userProfile, setUserProfile] = useState<DocumentData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (user) {
        setLoading(true);
        const userRef = doc(db, `users/${user.uid}`);
        try {
          const snapshot = await getDoc(userRef);
          if (snapshot.exists()) {
            setUserProfile(snapshot.data());
          } else {
            // This can happen if the user document hasn't been created yet
            // or if there's a delay. For now, we'll just set it to null.
            setUserProfile(null);
            console.warn(`No profile found for user ${user.uid}`);
          }
        } catch (error) {
          console.error("Error fetching user profile:", error);
          setUserProfile(null);
        } finally {
          setLoading(false);
        }
      } else {
        setUserProfile(null);
      }
    };

    fetchUserProfile();
  }, [user]);

  const value = { user, userProfile, loading };

  if (loading && user === null) { // Only show global loader on initial app load
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center">
            <LoaderCircle className="h-12 w-12 animate-spin text-primary" />
        </div>
    );
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
