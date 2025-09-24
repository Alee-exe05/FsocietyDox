
"use client";

import { useState, useEffect } from 'react';
import { onAuthStateChanged, User, signInWithPopup, GoogleAuthProvider, signOut as firebaseSignOut } from 'firebase/auth';
import { useAuth as useFirebaseAuth } from '../provider';
import { doc, setDoc } from 'firebase/firestore';
import { useFirestore } from '../firestore/use-doc';

export function useUser() {
  const auth = useFirebaseAuth();
  const [user, setUser] = useState<User | null>(auth.currentUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

  return { user, loading };
}

export function useAuth() {
  const auth = useFirebaseAuth();
  const firestore = useFirestore();

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      // Create a user document in Firestore
      if (user && firestore) {
        const userRef = doc(firestore, 'users', user.uid);
        await setDoc(userRef, {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            role: 'Member', // Default role
        }, { merge: true });
      }
      return user;
    } catch (error: any) {
      // Don't log an error if the user closes the sign-in popup.
      if (error.code === 'auth/popup-closed-by-user') {
          return null;
      }
      console.error("Error signing in with Google: ", error);
      return null;
    }
  };
  
  const signOut = async () => {
    try {
        await firebaseSignOut(auth);
    } catch (error) {
        console.error("Error signing out: ", error);
    }
  }

  return { signInWithGoogle, signOut };
}
