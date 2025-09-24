
import { db } from "@/lib/firebase/config";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import type { User as FirebaseAuthUser } from "firebase/auth";

// This function creates a new user profile document in Firestore
// when a user signs up.
export const createUserProfileDocument = async (userAuth: FirebaseAuthUser, additionalData: Record<string, any> = {}) => {
  if (!userAuth) return;

  const userRef = doc(db, `users/${userAuth.uid}`);
  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    const { email, displayName } = userAuth;
    const createdAt = serverTimestamp();
    const username = additionalData.username || displayName;

    try {
      await setDoc(userRef, {
        uid: userAuth.uid,
        email,
        username,
        role: "Utente Staff", // Default role for new users
        createdAt,
        pastes: 0,
        comments: 0,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }

  return userRef;
};
