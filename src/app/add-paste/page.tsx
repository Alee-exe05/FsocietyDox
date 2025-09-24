
"use client";
import { AddPasteForm } from "@/app/components/add-paste-form";
import { AppHeader } from "@/app/components/layout/app-header";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { useLanguage } from "@/contexts/language-context";


export default function AddPastePage() {
    const { dictionary } = useLanguage();
    return (
        <div className="flex min-h-screen w-full flex-col">
            <AppHeader />
            <main className="flex-1 flex flex-col items-center justify-center p-4">
                <div className="text-center">
                    <h1 className="text-4xl font-bold font-headline mb-4">Add a New Paste</h1>
                    <p className="text-muted-foreground mb-8">Click the button to open the paste editor.</p>
                     <Sheet>
                        <SheetTrigger asChild>
                            <Button size="lg">{dictionary.navigation.addPaste}</Button>
                        </SheetTrigger>
                        <SheetContent className="w-full md:w-1/2 p-0 border-l border-border flex-shrink-0">
                            <SheetHeader className="sr-only">
                                <SheetTitle>{dictionary.addPaste.title}</SheetTitle>
                                <SheetDescription>{dictionary.addPaste.description}</SheetDescription>
                            </SheetHeader>
                            <AddPasteForm />
                        </SheetContent>
                    </Sheet>
                </div>
            </main>
        </div>
    )
}
