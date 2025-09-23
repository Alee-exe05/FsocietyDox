
import { AppHeader } from "@/app/components/layout/app-header";
import { LoginForm } from "@/app/components/login-form";

export default function LoginPage() {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <AppHeader />
            <main className="flex-1 flex items-center justify-center p-4">
                <div className="w-full max-w-md">
                    <LoginForm />
                </div>
            </main>
        </div>
    );
}
