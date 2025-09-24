
"use client";

import { useState, useEffect, useRef } from 'react';
import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  Query,
  DocumentData,
  QueryConstraint,
} from 'firebase/firestore';
import { useFirestore } from '../provider';

interface UseCollectionOptions {
  constraints?: QueryConstraint[];
}

export function useCollection<T>(
  pathOrQuery: string | Query | null,
  options?: UseCollectionOptions
) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const firestore = useFirestore();
  const optionsRef = useRef(options);

  useEffect(() => {
    if (!firestore || !pathOrQuery) {
        setLoading(false);
        return;
    }

    let q: Query;
    if (typeof pathOrQuery === 'string') {
        q = query(collection(firestore, pathOrQuery), ...(optionsRef.current?.constraints || []));
    } else {
        q = query(pathOrQuery, ...(optionsRef.current?.constraints || []));
    }

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const documents = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as T[];
        setData(documents);
        setLoading(false);
      },
      (err) => {
        console.error(err);
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [firestore, pathOrQuery]); // Re-run effect if firestore or path changes

  return { data, loading, error };
}
