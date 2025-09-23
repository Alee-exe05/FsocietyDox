
import { AppHeader } from "@/app/components/layout/app-header";
import { RegisterForm } from "@/app/components/register-form";

export default function RegisterPage() {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <AppHeader />
            <main className="flex-1 flex items-center justify-center p-4">
                <div className="w-full max-w-md">
                    <RegisterForm />
                </div>
            </main>
        </div>
    );
}
