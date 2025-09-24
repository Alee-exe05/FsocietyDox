
"use client";

import React, { useState, useEffect, ReactNode } from 'react';
import { FirebaseProvider } from './provider';
import { initializeFirebase } from './index';

interface FirebaseClientProviderProps {
  children: ReactNode;
}

export function FirebaseClientProvider({ children }: FirebaseClientProviderProps) {
  const [firebase, setFirebase] = useState(() => initializeFirebase());

  // Firebase should only be initialized once.
  // The value is memoized in a state, so it persists across re-renders.
  
  return <FirebaseProvider value={firebase}>{children}</FirebaseProvider>;
}
