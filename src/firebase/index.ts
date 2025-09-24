import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { firebaseConfig } from '@/lib/firebase/config';

// Initialize Firebase
let app: FirebaseApp;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApp();
}

function initializeFirebase(): { app: FirebaseApp; auth: Auth; firestore: Firestore } {
  const firestore = getFirestore(app);
  const auth = getAuth(app);
  
  return { app, auth, firestore };
}

// Export the initialization function
export { initializeFirebase };

// Export providers and hooks
export * from './provider';
export * from './client-provider';
export * from './auth/use-user';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
