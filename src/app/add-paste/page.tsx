
"use client";
import { AddPasteForm } from "@/app/components/add-paste-form";
import { Sidebar, SidebarContent, SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/components/layout/app-sidebar";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { useUser } from "@/firebase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function AddPastePage() {
    const { dictionary } = useLanguage();
    const { user, loading } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        }
    }, [user, loading, router]);
    
    if (loading || !user) {
        return <div>Loading...</div>;
    }

    return (
        <SidebarProvider>
            <Sidebar>
                <AppSidebar />
            </Sidebar>
            <SidebarInset>
                <main className="flex-1 flex flex-col items-center justify-center p-4">
                     <div className="absolute top-4 left-4">
                        <SidebarTrigger />
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold font-headline mb-4">Add a New Paste</h1>
                        <p className="text-muted-foreground mb-8">Click the button to open the paste editor.</p>
                         <Sheet>
                            <SheetTrigger asChild>
                                <Button size="lg">{dictionary.navigation.addPaste}</Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-full p-0 border-l border-border flex-shrink-0 md:w-1/2">
                                <SheetHeader className="p-6">
                                    <SheetTitle>{dictionary.addPaste.title}</SheetTitle>
                                    <SheetDescription>{dictionary.addPaste.description}</SheetDescription>
                                </SheetHeader>
                                <AddPasteForm />
                            </SheetContent>
                        </Sheet>
                    </div>
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}
