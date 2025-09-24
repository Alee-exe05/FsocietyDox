
"use client";

import { useState, useEffect } from 'react';
import {
  doc,
  onSnapshot,
  DocumentReference,
  DocumentData,
} from 'firebase/firestore';
import { useFirestore as useFirestoreInstance } from '../provider';

export function useDoc<T>(pathOrRef: string | DocumentReference | null) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  const firestore = useFirestoreInstance();

  useEffect(() => {
    if (!firestore || !pathOrRef) {
        setLoading(false);
        return;
    }
    
    const docRef = typeof pathOrRef === 'string' ? doc(firestore, pathOrRef) : pathOrRef;

    const unsubscribe = onSnapshot(
      docRef,
      (docSnapshot) => {
        if (docSnapshot.exists()) {
          setData({ id: docSnapshot.id, ...docSnapshot.data() } as T);
        } else {
          setData(null);
        }
        setLoading(false);
      },
      (err) => {
        console.error(err);
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [firestore, pathOrRef]);

  return { data, loading, error };
}

// Export useFirestore from provider to be used in components
export { useFirestoreInstance as useFirestore };
