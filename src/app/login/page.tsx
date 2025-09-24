
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth, useUser } from '@/firebase/auth/use-user';
import { FsocietyLogo } from '../components/FsocietyLogo';
import { Chrome } from 'lucide-react';


export default function LoginPage() {
  const { signInWithGoogle } = useAuth();
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push('/');
    }
  }, [user, loading, router]);

  const handleSignIn = async () => {
    await signInWithGoogle();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
                <FsocietyLogo />
            </div>
          <CardTitle className="text-2xl font-headline">Welcome to the FSociety</CardTitle>
          <CardDescription>
            Authenticate to join the cause. We are finally free. We are finally awake.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full" onClick={handleSignIn} disabled={loading}>
            <Chrome className="mr-2 h-4 w-4" />
            Sign in with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
