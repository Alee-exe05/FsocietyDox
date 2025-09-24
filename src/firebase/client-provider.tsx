
"use client";

import React, { ReactNode } from 'react';
import { FirebaseProvider } from './provider';
import { initializeFirebase } from './index';

interface FirebaseClientProviderProps {
  children: ReactNode;
}

export function FirebaseClientProvider({ children }: FirebaseClientProviderProps) {
  const [firebase, setFirebase] = React.useState(() => initializeFirebase());

  // Firebase should only be initialized once.
  // The value is memoized in a state, so it persists across re-renders.
  
  return <FirebaseProvider value={firebase}>{children}</FirebaseProvider>;
}
